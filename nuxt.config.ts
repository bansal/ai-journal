// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["github:bansal/journal"],
  css: ["~/style.css"],
  appConfig: {
    journal: {
      name: "AI Journal",
      tagline: "The latest in artificial intelligence, from labs to industry",
      description:
        "A minimal newspaper aggregating the latest AI headlines from research labs, model builders, and industry sources.",
      mastheadSections: ["Research", "Models", "Industry"],
      footer: {
        attribution: "Headlines sourced via RSS · Updated periodically",
      },
      sections: {
        latestHeadlines: "Latest Headlines",
        bySection: "By Section",
        sources: "Sources",
        externalLinks: "External Links",
      },
      newsSources: [
        {
          id: "the-verge-ai",
          name: "The Verge AI",
          url: "https://www.theverge.com/rss/ai/index.xml",
          link: "https://www.theverge.com/ai",
          category: "Industry",
        },
        {
          id: "venturebeat-ai",
          name: "VentureBeat AI",
          url: "https://venturebeat.com/category/ai/feed/",
          link: "https://venturebeat.com/category/ai/",
          category: "Industry",
        },
        {
          id: "mit-tr-ai",
          name: "MIT Technology Review",
          url: "https://www.technologyreview.com/topic/artificial-intelligence/feed/",
          link: "https://www.technologyreview.com/topic/artificial-intelligence/",
          category: "Research",
        },
        {
          id: "wired-ai",
          name: "Wired AI",
          url: "https://www.wired.com/feed/tag/ai/latest/rss",
          link: "https://www.wired.com/tag/ai/",
          category: "Industry",
        },
        {
          id: "google-ai",
          name: "Google AI",
          url: "https://blog.google/technology/ai/rss/",
          link: "https://blog.google/technology/ai/",
          category: "Research",
        },
        {
          id: "openai-blog",
          name: "OpenAI",
          url: "https://openai.com/blog/rss.xml",
          link: "https://openai.com/blog",
          category: "Models",
        },
        {
          id: "huggingface",
          name: "Hugging Face",
          url: "https://huggingface.co/blog/feed.xml",
          link: "https://huggingface.co/blog",
          category: "Models",
        },
        {
          id: "nvidia-blog",
          name: "NVIDIA Blog",
          url: "https://blogs.nvidia.com/feed/",
          link: "https://blogs.nvidia.com/",
          category: "Research",
        },
        {
          id: "microsoft-research",
          name: "Microsoft Research",
          url: "https://www.microsoft.com/en-us/research/feed/",
          link: "https://www.microsoft.com/en-us/research/",
          category: "Research",
        },
        {
          id: "marktechpost",
          name: "MarkTechPost",
          url: "https://www.marktechpost.com/feed/",
          link: "https://www.marktechpost.com/",
          category: "Research",
        },
      ],
      externalLinks: [
        {
          id: "pitchwall",
          name: "Pitchwall",
          href: "https://pitchwall.co",
        },
      ],
      filters: {
        thumbnailOnly: true,
      },
      copy: {
        loading: "Gathering today's headlines…",
        errorTitle: "Unable to load news",
        errorDescription: "Please check your connection and try again.",
        retry: "Retry",
        empty: "No articles available right now.",
      },
    },
  },
});
