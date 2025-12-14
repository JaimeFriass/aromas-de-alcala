import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string().optional(),
	}),
});

const landingCollection = defineCollection({
	type: 'data',
	schema: z.object({
		hero: z.object({
			title: z.string(),
			subtitle: z.string(),
			cta: z.string(),
		}),
		intro: z.object({
			title: z.string(),
			quote: z.string(),
			description: z.string(),
		}),
		features: z.object({
			label: z.string(),
			title: z.string(),
			description_1: z.string(),
			description_2: z.string(),
			cta: z.string(),
		}),
		rates: z.object({
			label: z.string(),
			title: z.string(),
			high_season: z.object({
				title: z.string(),
				items: z.array(z.string()),
				price: z.string(),
				price_suffix: z.string(),
				note: z.string(),
			}),
			low_season: z.object({
				title: z.string(),
				items: z.array(z.string()),
				price: z.string(),
				price_suffix: z.string(),
				note: z.string(),
			}),
		}),
		cta_section: z.object({
			title: z.string(),
			subtitle: z.string(),
			button: z.string(),
		}),
		policy: z.object({
			title: z.string(),
			text: z.string(),
		}),
		amenities: z.object({
			label: z.string(),
			title: z.string(),
			description: z.string(),
			features: z.array(
				z.object({
					title: z.string(),
					description: z.string(),
					icon: z.string(),
				})
			),
			extras_title: z.string(),
			extras: z.array(z.string()),
		}),
		gallery: z.object({
			label: z.string(),
			title: z.string(),
			description: z.string(),
			items: z.array(
				z.object({
					image: z.string(),
					title: z.string(),
					description: z.string(),
				})
			),
		}),
	}),
});

const contactCollection = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		address: z.string(),
		email: z.string(),
		phone_1: z.string(),
		phone_2: z.string(),
		whatsapp_cta: z.string(),
		social_cta: z.string(),
	}),
});

const recommendationsCollection = defineCollection({
	type: 'data',
	schema: z.object({
		hero: z.object({
			title: z.string(),
			subtitle: z.string(),
		}),
		featured: z.object({
			badge: z.string(),
			title: z.string(),
			description: z.string(),
			cta: z.string(),
		}),
		list: z.array(z.object({
			title: z.string(),
			description: z.string(),
			image: z.string(),
			category: z.string(),
		})),
	}),
});

export const collections = {
	projects: projectsCollection,
	landing: landingCollection,
	contact: contactCollection,
	recommendations: recommendationsCollection,
};
