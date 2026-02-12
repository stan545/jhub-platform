// State Management
const MERCOR_LISTINGS_URL = "https://aws.api.mercor.com/work/listings-explore-page";
const JOBS_PER_PAGE = 12;
let currentPage = 1;
let allJobs = [...jobsData];
let filteredJobs = [...jobsData];
let allBlogs = [...blogData];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderJobs(filteredJobs);
    renderBlogs(allBlogs);
    initializeEventListeners();
    loadMercorListings();
});

// Event Listeners
function initializeEventListeners() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const navSearchBtn = document.getElementById('navSearchBtn');
    const navSearch = document.getElementById('navSearch');
    const navSearchInput = document.getElementById('navSearchInput');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    if (navSearchBtn && navSearch && navSearchInput) {
        navSearchBtn.addEventListener('click', () => {
            navSearch.classList.toggle('active');
            if (navSearch.classList.contains('active')) {
                navSearchInput.focus();
            }
        });

        navSearchInput.addEventListener('input', () => {
            searchInput.value = navSearchInput.value;
            performSearch();
        });

        navSearchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                navSearch.classList.remove('active');
                navSearchInput.blur();
            }
        });

        document.addEventListener('click', (event) => {
            if (!navSearch.contains(event.target) && event.target !== navSearchBtn) {
                navSearch.classList.remove('active');
            }
        });
    }

    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', () => {
            searchInput.value = mobileSearchInput.value;
            performSearch();
        });
    }

    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', () => {
            performSearch();
        });
    }

    // Filter functionality
    const categoryFilter = document.getElementById('categoryFilter');
    const typeFilter = document.getElementById('typeFilter');
    const levelFilter = document.getElementById('levelFilter');

    categoryFilter.addEventListener('change', applyFilters);
    typeFilter.addEventListener('change', applyFilters);
    levelFilter.addEventListener('change', applyFilters);

    // Contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleContactForm);

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Search Function
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredJobs = allJobs.filter(job => {
        return job.title.toLowerCase().includes(searchTerm) ||
               job.company.toLowerCase().includes(searchTerm) ||
               job.description.toLowerCase().includes(searchTerm) ||
               job.category.toLowerCase().includes(searchTerm);
    });

    currentPage = 1;
    applyFilters();
}

// Filter Function
function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const type = document.getElementById('typeFilter').value;
    const level = document.getElementById('levelFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    filteredJobs = allJobs.filter(job => {
        const matchesSearch = !searchTerm || 
            job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.description.toLowerCase().includes(searchTerm);
        
        const matchesCategory = !category || job.category === category;
        const matchesType = !type || job.type === type;
        const matchesLevel = !level || job.level === level;

        return matchesSearch && matchesCategory && matchesType && matchesLevel;
    });

    currentPage = 1;
    renderJobs(filteredJobs);
}

// Render Jobs
function renderJobs(jobs) {
    const jobsGrid = document.getElementById('jobsGrid');
    
    if (jobs.length === 0) {
        jobsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <h3 style="color: #64748b; font-size: 1.5rem;">No jobs found</h3>
                <p style="color: #94a3b8; margin-top: 1rem;">Try adjusting your search or filters</p>
            </div>
        `;
        renderPagination(jobs);
        return;
    }

    // Calculate pagination
    const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
    const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
    const endIndex = startIndex + JOBS_PER_PAGE;
    const paginatedJobs = jobs.slice(startIndex, endIndex);

    jobsGrid.innerHTML = paginatedJobs.map(job => `
        <div class="job-card">
            <div class="job-header">
                <div>
                    <p class="job-company">${job.company}</p>
                    <h3 class="job-title">${job.title}</h3>
                </div>
            </div>
            <div class="job-tags">
                <span class="tag tag-category">${formatCategory(job.category)}</span>
                <span class="tag tag-type">${formatType(job.type)}</span>
                <span class="tag tag-level">${formatLevel(job.level)}</span>
            </div>
            <p class="job-description">${truncateText(job.description, 220)}</p>
            <div class="job-footer">
                <span class="job-salary">${job.salary}</span>
                <a href="${job.applyLink}" class="apply-btn" target="_blank">Apply Now</a>
            </div>
        </div>
    `).join('');

    renderPagination(jobs);
}

// Render Pagination Controls
function renderPagination(jobs) {
    const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
    const paginationContainer = document.getElementById('paginationControls');
    
    if (!paginationContainer || totalPages <= 1) {
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }

    let paginationHTML = '<div class="pagination">';
    
    // Previous button
    paginationHTML += `
        <button class="pagination-btn" id="prevBtn" ${currentPage === 1 ? 'disabled' : ''} onclick="goToPage(${currentPage - 1})">
            <i class="fas fa-chevron-left"></i> Previous
        </button>
    `;

    // Page indicator
    paginationHTML += `<span class="page-indicator">Page ${currentPage} of ${totalPages}</span>`;

    // Next button
    paginationHTML += `
        <button class="pagination-btn" id="nextBtn" ${currentPage === totalPages ? 'disabled' : ''} onclick="goToPage(${currentPage + 1})">
            Next <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    paginationHTML += '</div>';
    paginationContainer.innerHTML = paginationHTML;
}

// Navigate to page
function goToPage(page) {
    const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderJobs(filteredJobs);
        // Scroll to jobs section
        document.getElementById('jobs').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

async function loadMercorListings() {
    try {
        const response = await fetch(MERCOR_LISTINGS_URL, { cache: "no-store" });
        if (!response.ok) {
            throw new Error(`Mercor API error: ${response.status}`);
        }

        const data = await response.json();
        if (!data || !Array.isArray(data.listings)) {
            return;
        }

        const mappedJobs = data.listings.map(mapListingToJob).filter(Boolean);
        if (mappedJobs.length === 0) {
            return;
        }

        allJobs = mappedJobs;
        filteredJobs = mappedJobs;
        applyFilters();
    } catch (error) {
        // Keep fallback data if the API is unavailable or blocked by CORS.
        console.warn("Mercor listings fetch failed, using fallback data.", error);
    }
}

function mapListingToJob(listing, index) {
    if (!listing || !listing.title) {
        return null;
    }

    return {
        id: index + 1,
        company: listing.companyName || "Mercor",
        title: listing.title,
        category: inferCategory(listing),
        type: inferType(listing),
        level: inferLevel(listing),
        description: normalizeDescription(listing.description),
        salary: formatRate(listing),
        applyLink: buildMercorJobUrl(listing)
    };
}

function buildMercorJobUrl(listing) {
    if (!listing || !listing.listingId || !listing.title) {
        return "https://work.mercor.com/explore";
    }

    const slug = slugifyTitle(listing.title);
    return `https://work.mercor.com/jobs/${listing.listingId}/${slug}?returnPath=/explore`;
}

function slugifyTitle(title) {
    return title
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

function formatRate(listing) {
    const rateMin = listing.rateMin;
    const rateMax = listing.rateMax;
    const frequency = listing.payRateFrequency;

    if (rateMin == null && rateMax == null) {
        return "Pay varies";
    }

    const formattedMin = formatCurrency(rateMin);
    const formattedMax = formatCurrency(rateMax);

    if (rateMin != null && rateMax != null && rateMin === rateMax) {
        return frequency === "one-time"
            ? `$${formattedMax} (one-time)`
            : `$${formattedMax}/hr`;
    }

    if (frequency === "one-time") {
        return `$${formattedMin}-${formattedMax} (one-time)`;
    }

    if (rateMin == null) {
        return `$${formattedMax}/hr`;
    }

    if (rateMax == null) {
        return `$${formattedMin}/hr`;
    }

    return `$${formattedMin}-${formattedMax}/hr`;
}

function formatCurrency(value) {
    if (value == null) {
        return "";
    }

    const rounded = Number(value);
    if (Number.isNaN(rounded)) {
        return "";
    }

    return Number.isInteger(rounded) ? rounded.toString() : rounded.toFixed(2);
}

function inferCategory(listing) {
    const title = (listing.title || "").toLowerCase();
    const domain = (listing.listingDomain || "").toLowerCase();
    const description = (listing.description || "").toLowerCase();

    if (containsAny(title, ["video", "screen recording"]) || description.includes("screen sessions")) {
        return "video";
    }

    if (containsAny(title, ["audio", "speech"]) || description.includes("audio")) {
        return "audio";
    }

    if (title.includes("software expert") || description.includes("annotate screenshots") || description.includes("bounding boxes")) {
        return "image";
    }

    if (title.includes("red-teamer") || description.includes("text-based")) {
        return "text";
    }

    if (domain.includes("arts") || domain.includes("design")) {
        return "image";
    }

    return "text";
}

function inferType(listing) {
    const location = (listing.location || "").toLowerCase();
    const arrangement = (listing.workArrangement || "").toLowerCase();

    if (arrangement.includes("remote") || location.includes("remote")) {
        return "remote";
    }

    return "onsite";
}

function inferLevel(listing) {
    const title = (listing.title || "").toLowerCase();
    const description = (listing.description || "").toLowerCase();
    const rateMax = listing.rateMax;
    const rateMin = listing.rateMin;
    const benchmark = rateMax != null ? rateMax : rateMin;

    if (containsAny(title, ["phd", "expert", "advanced", "senior"]) || description.includes("phd")) {
        return "advanced";
    }

    if (containsAny(title, ["specialist", "engineer", "fellow"])) {
        return "intermediate";
    }

    if (benchmark == null) {
        return "intermediate";
    }

    if (benchmark >= 100) {
        return "advanced";
    }

    if (benchmark >= 60) {
        return "intermediate";
    }

    return "beginner";
}

function normalizeDescription(description) {
    if (!description) {
        return "Details available on Mercor.";
    }

    return description
        .replace(/\*\*/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function containsAny(text, terms) {
    return terms.some(term => text.includes(term));
}

// Render Blog Posts
function renderBlogs(blogs) {
    const blogGrid = document.getElementById('blogGrid');
    
    blogGrid.innerHTML = blogs.map(blog => `
        <article class="blog-card">
            <img src="${blog.image}" alt="${blog.title}" class="blog-image">
            <div class="blog-content">
                <p class="blog-date"><i class="far fa-calendar"></i> ${blog.date}</p>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <a href="${blog.link}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </article>
    `).join('');
}

// Format Helpers
function formatCategory(category) {
    const categories = {
        'image': 'Image Annotation',
        'text': 'Text Annotation',
        'video': 'Video Annotation',
        'audio': 'Audio Annotation'
    };
    return categories[category] || category;
}

function formatType(type) {
    return type.charAt(0).toUpperCase() + type.slice(1);
}

function formatLevel(level) {
    return level.charAt(0).toUpperCase() + level.slice(1);
}

// Contact Form Handler
function handleContactForm(e) {
    e.preventDefault();
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    e.target.reset();
}

// Update Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Utility: Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add search debouncing for better performance
document.getElementById('searchInput').addEventListener('input', debounce(() => {
    performSearch();
}, 300));

function truncateText(text, maxLength) {
    if (!text || text.length <= maxLength) {
        return text;
    }

    return `${text.slice(0, maxLength).trim()}...`;
}
