// Fallback jobs data (used when live Mercor API fetch is unavailable)
const jobsData = [
    {
        id: 1,
        company: "Glowstone",
        title: "Software Expert (Development & Programming)",
        category: "image",
        type: "remote",
        level: "intermediate",
        description: "Remote role focused on recording screen sessions and annotating screenshots of professional software. Tools include Visual Studio Code, Android Studio, Quartus, and VMware. Must have access to a physical Mac.",
        salary: "$0-$65/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABnCtaRDyXtJTKuMVN1oUC/software-expert-development-programming?returnPath=/explore"
    },
    {
        id: 2,
        company: "Glowstone",
        title: "Software Expert (Scientific and Analytical)",
        category: "image",
        type: "remote",
        level: "advanced",
        description: "Remote role focused on screen recording and UI annotation for analytical software including MATLAB, Origin, Stata, and EViews. Must have access to a physical Mac.",
        salary: "$0-$100/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABnCt3BRGgqgUDN_lP3KTW/software-expert-scientific-and-analytical?returnPath=/explore"
    },
    {
        id: 3,
        company: "Glowstone",
        title: "Software Expert (Creative Software)",
        category: "image",
        type: "remote",
        level: "advanced",
        description: "Remote role focused on screen recording and UI annotation for creative tools such as Blender, GIMP, Godot Engine, Inkscape, LMMS, Shotcut, and Wings 3D. Must have access to a physical Mac.",
        salary: "$0-$100/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABnCtvQ0uJ1jexmhJBjaRk/software-expert-creative-software?returnPath=/explore"
    },
    {
        id: 4,
        company: "Glowstone",
        title: "Software Expert (CAD and Engineering)",
        category: "image",
        type: "remote",
        level: "advanced",
        description: "Remote role focused on screen recording and UI annotation for AutoCAD Mechanical, SolidWorks, Inventor, and Vivado. Must have access to a physical Mac.",
        salary: "$0-$100/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABnCtxjHBuwvPhptxJ3LRy/software-expert-cad-and-engineering?returnPath=/explore"
    },
    {
        id: 5,
        company: "Glowstone",
        title: "Software Expert (Operating System)",
        category: "image",
        type: "remote",
        level: "advanced",
        description: "Remote role focused on annotating and recording workflows across Windows, macOS, and Linux. Must have access to a physical Mac.",
        salary: "$0-$100/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABnCt2TH2oshN_M7NCB4Ns/software-expert-operating-system?returnPath=/explore"
    },
    {
        id: 6,
        company: "Glowstone",
        title: "Software Expert (Office Suite)",
        category: "image",
        type: "remote",
        level: "intermediate",
        description: "Remote role focused on screen recording and UI annotation for Word, PowerPoint, and Excel. Must have access to a physical Mac.",
        salary: "$0-$100/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABnCt0qHJM_tY8h3hMx7Bh/software-expert-office-suite?returnPath=/explore"
    },
    {
        id: 7,
        company: "Neon",
        title: "AI Red-Teamer - Adversarial AI Testing (Advanced); English",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Text-based red teaming of conversational AI models, including jailbreaks, prompt injections, and vulnerability analysis. Pay rate varies by project.",
        salary: "$50-$111/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABnDsH7b9Cfu8yYaFLY6X8/ai-red-teamer-adversarial-ai-testing-english?returnPath=/explore"
    },
    {
        id: 8,
        company: "Neon",
        title: "Finance Expert",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Evaluate and improve AI responses for finance-related queries, including accuracy, reasoning quality, and clarity. Remote, contract role.",
        salary: "$105/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABm5P7Q_vrkyhHx3JCw7Mz/finance-expert?returnPath=/explore"
    },
    {
        id: 9,
        company: "Neon",
        title: "Math (PhD)",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Evaluate LLM-generated responses to math queries for correctness, rigor, and clarity. PhD in Mathematics required. Remote, contract role.",
        salary: "$73.29/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABm5SOrNTWQDWRHTdMiqwu/math-phd?returnPath=/explore"
    },
    {
        id: 10,
        company: "Malachite",
        title: "Machine Learning Engineer",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Design evaluation suites for ML engineering tasks and assess AI-generated solutions. Remote, project-based role.",
        salary: "$100-$120/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABm-gHdfMAIO7T8DxPyrGe/machine-learning-engineer?returnPath=/explore"
    },
    {
        id: 11,
        company: "Moonlight",
        title: "Literature Specialist",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Design literature-based tasks and evaluate AI responses for interpretive depth and academic standards. Remote, contract role.",
        salary: "$40-$90/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABm8ovG2bMpaGAhrNCSrq9/literature-specialist?returnPath=/explore"
    },
    {
        id: 12,
        company: "Mercor Intelligence",
        title: "Games Expert",
        category: "text",
        type: "remote",
        level: "intermediate",
        description: "Create and assess gaming tasks and evaluate AI outputs for real-world gaming experiences. Remote, part-time role.",
        salary: "$35-$50/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABmMtq802s6VvOeL9HfY70/games-expert?returnPath=/explore"
    },
    {
        id: 13,
        company: "Obsidian",
        title: "Email Specialist",
        category: "text",
        type: "remote",
        level: "intermediate",
        description: "Support AI training workflows inside an email client. Strong digital literacy required; light familiarity with JSON is helpful but not required.",
        salary: "$50-$90/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABmX3G6WbqMEcZqdhLoIkJ/email-specialist?returnPath=/explore"
    },
    {
        id: 14,
        company: "Neon",
        title: "AI Red-Teamer - Adversarial AI Testing (Advanced); English & Arabic",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Red-team conversational AI models with adversarial inputs and annotate failures. Remote role; English and Arabic required.",
        salary: "$32.25/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABm4Aux3SihpbVZWVJPoeh/ai-red-teamer-adversarial-ai-testing-advanced-english-and-arabic?returnPath=/explore"
    },
    {
        id: 15,
        company: "Neon",
        title: "AI Red-Teamer - Adversarial AI Testing (Advanced); English & German",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Red-team conversational AI models with adversarial inputs and annotate failures. Remote role; English and German required.",
        salary: "$55.55/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABm4ANkcvaSWj8CgNBwZI6/ai-red-teamer-adversarial-ai-testing-advanced-english-and-german?returnPath=/explore"
    },
    {
        id: 16,
        company: "Neon",
        title: "AI Red-Teamer - Adversarial AI Testing (Advanced); English & Chinese",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Red-team conversational AI models with adversarial inputs and annotate failures. Remote role; English and Chinese required.",
        salary: "$50.50/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABm4Aqai3p_Kf5zV1GVKBt/ai-red-teamer-adversarial-ai-testing-advanced-english-and-chinese?returnPath=/explore"
    },
    {
        id: 17,
        company: "Neon",
        title: "AI Red-Teamer - Adversarial AI Testing (Advanced); English & Italian",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Red-team conversational AI models with adversarial inputs and annotate failures. Remote role; English and Italian required.",
        salary: "$50.50/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABm4AKiZxIXHUTg6xHSb5k/ai-red-teamer-adversarial-ai-testing-advanced-english-and-italian?returnPath=/explore"
    },
    {
        id: 18,
        company: "Neon",
        title: "AI Red-Teamer - Adversarial AI Testing (Advanced); English & Brazilian Portuguese",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Red-team conversational AI models with adversarial inputs and annotate failures. Remote role; English and Brazilian Portuguese required.",
        salary: "$28.74/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABm4ARCq21N0b1P9JLcqcA/ai-red-teamer-adversarial-ai-testing-advanced-english-and-brazilian-portuguese?returnPath=/explore"
    },
    {
        id: 19,
        company: "Neon",
        title: "Software Engineering & Systems Design Expert",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Evaluate LLM-generated coding responses, validate outputs, and annotate strengths and weaknesses. Remote contract work.",
        salary: "$45-$80/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABm5P9uuwwhzbFb3hN3p-m/software-engineering-and-systems-design-expert?returnPath=/explore"
    },
    {
        id: 20,
        company: "Glowstone",
        title: "Python SWE",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Model-training project for experienced Python engineers. Requires deep Python expertise and a human technical interview.",
        salary: "$100/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABl8f-EJV6TYkTcM1LxpPK/python-swe?returnPath=/explore"
    },
    {
        id: 21,
        company: "Mercor",
        title: "Git Environments Expert - Advanced Git SWE (3+ YOE)",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Design advanced Git scenarios, implement tests, and produce reference solutions. Remote role for experienced Git engineers.",
        salary: "$85-$100/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABnEpZID39oWvVdcRI4LNm/git-environments-expert-advanced-git-swe-3-yoe?returnPath=/explore"
    },
    {
        id: 22,
        company: "Malachite",
        title: "Medical Fellows (Must be in Fellowship)",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Project focused on medical reasoning with lab data. Requires U.S.-based fellowship and MD/DO.",
        salary: "$130/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABmn9mC2ZjiCC8NKBBDIIn/medical-fellows-must-be-in-fellowship?returnPath=/explore"
    },
    {
        id: 23,
        company: "Moonlight",
        title: "Law Specialist (J.D. or equivalent legal education)",
        category: "text",
        type: "remote",
        level: "advanced",
        description: "Craft legal prompts and gold-standard answers across contracts, regulations, and case law. Remote contract work.",
        salary: "$90-$100/hr",
        applyLink: "https://work.mercor.com/jobs/list_AAABmr2ykcTkOLkeIPlMGbhp/law-specialist-jd-or-equivalent-legal-education?returnPath=/explore"
    },
    {
        id: 24,
        company: "Simile",
        title: "Technical Professionals for Paid Research Interviews",
        category: "text",
        type: "remote",
        level: "intermediate",
        description: "Short compensated research survey for high-earning technical professionals in major U.S. metros.",
        salary: "$150 (one-time)",
        applyLink: "https://work.mercor.com/jobs/list_AAABmzJnO_bC2yVs9SBEHI05/technical-professionals-for-paid-research-interviews?returnPath=/explore"
    }
];

// Sample Blog Posts Data
const blogData = [
    {
        id: 1,
        title: "Getting Started with AI Annotation: A Beginner's Guide",
        date: "February 8, 2026",
        excerpt: "Learn the fundamentals of AI annotation and discover how you can start your career in this growing field. We cover everything from basic concepts to landing your first job.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        author: "Sarah Johnson",
        link: "blog/getting-started-ai-annotation.html"
    },
    {
        id: 2,
        title: "Top 10 Skills Every Data Annotator Needs in 2026",
        date: "February 5, 2026",
        excerpt: "The AI annotation field is evolving rapidly. Discover the essential skills you need to stay competitive and advance your career in data labeling.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
        author: "Mike Chen",
        link: "blog/top-10-skills-data-annotator.html"
    },
    {
        id: 3,
        title: "Remote Annotation Jobs: How to Stay Productive",
        date: "February 1, 2026",
        excerpt: "Working remotely as an annotator comes with unique challenges. Here are proven strategies to maintain productivity and work-life balance.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
        author: "Emily Rodriguez",
        link: "blog/remote-annotation-productivity.html"
    },
    {
        id: 4,
        title: "Understanding Pay Rates in AI Annotation Work",
        date: "January 28, 2026",
        excerpt: "A comprehensive guide to annotation job compensation, including factors that affect pay rates and how to negotiate better terms.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
        author: "David Kim",
        link: "blog/understanding-pay-rates.html"
    },
    {
        id: 5,
        title: "The Future of AI Training: Trends to Watch",
        date: "January 25, 2026",
        excerpt: "Explore the latest trends in AI training and data annotation. Learn how the industry is evolving and what opportunities lie ahead.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
        author: "Lisa Thompson",
        link: "blog/future-ai-training-trends.html"
    },
    {
        id: 6,
        title: "Quality vs Speed: Finding the Right Balance",
        date: "January 22, 2026",
        excerpt: "Balancing accuracy and efficiency is crucial in annotation work. Discover best practices for delivering high-quality work without sacrificing speed.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        author: "James Wilson",
        link: "blog/quality-vs-speed-balance.html"
    },
    {
        id: 7,
        title: "Annotation Platforms Compared: Mercor vs Traditional Freelance Sites",
        date: "February 10, 2026",
        excerpt: "Explore the differences between specialized AI annotation platforms (like Mercor) and traditional freelance marketplaces. Learn which might be right for your career goals.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
        author: "JHub Editorial",
        category: "Career Tips",
        featured: true,
        readTime: "8 min read",
        link: "blog/sample-blog-post.html"
    }
];
