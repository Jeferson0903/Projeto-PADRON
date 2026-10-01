export interface TestimonialType {
    id: number;
    name: string;
    role: string;
    image: string;
    icon: string;
    stars: number;
    feedback: string;
    /** Quando true, a imagem é exibida em destaque (print de depoimento real). */
    isRealImage?: boolean;
}

// Depoimentos reais de clientes (imagens)
export const testimonialsTwoData: TestimonialType[] = [
    {
        id: 1,
        name: 'Cliente',
        role: 'Depoimento real',
        image: 'https://ntsuddpjnvgkhkpufisc.supabase.co/storage/v1/object/public/Midias-Clientes/wqweqweqwe.jpeg',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'Depoimento real de cliente.',
    },
    {
        id: 2,
        name: 'Cliente',
        role: 'Depoimento real',
        image: 'https://ntsuddpjnvgkhkpufisc.supabase.co/storage/v1/object/public/Midias-Clientes/WhatsApp%20Image%202026-03-09%20at%2015.43.58qweqwe.jpeg',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'Depoimento real de cliente.',
    },
    {
        id: 3,
        name: 'Cliente',
        role: 'Depoimento real',
        image: 'https://ntsuddpjnvgkhkpufisc.supabase.co/storage/v1/object/public/Midias-Clientes/WhatsApp%20Image%202026-03-09%20at%2015.43.57wqeqweqwewqe.jpeg',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'Depoimento real de cliente.',
    },
    {
        id: 4,
        name: 'Cliente',
        role: 'Depoimento real',
        image: 'https://ntsuddpjnvgkhkpufisc.supabase.co/storage/v1/object/public/Midias-Clientes/WhatsApp%20Image%202026-03-09%20at%2015.43.57weqwe.jpeg',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'Depoimento real de cliente.',
    },
    {
        id: 5,
        name: 'Cliente',
        role: 'Depoimento real',
        image: 'https://ntsuddpjnvgkhkpufisc.supabase.co/storage/v1/object/public/Midias-Clientes/WhatsApp%20Image%202026-03-09%20at%2015.43.57qweqweqwe.jpeg',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'Depoimento real de cliente.',
    },
    {
        id: 6,
        name: 'Cliente',
        role: 'Depoimento real',
        image: 'https://ntsuddpjnvgkhkpufisc.supabase.co/storage/v1/object/public/Midias-Clientes/WhatsApp%20Image%202026-03-09%20at%2015.43.57qweqwe.jpeg',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'Depoimento real de cliente.',
    },
    {
        id: 7,
        name: 'Cliente',
        role: 'Depoimento real',
        image: 'https://ntsuddpjnvgkhkpufisc.supabase.co/storage/v1/object/public/Midias-Clientes/WhatsApp%20Image%202026-03-09%20at%2015.43.56wqweqwe.jpeg',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'Depoimento real de cliente.',
    },
    {
        id: 8,
        name: 'Cliente',
        role: 'Depoimento real',
        image: 'https://ntsuddpjnvgkhkpufisc.supabase.co/storage/v1/object/public/Midias-Clientes/WhatsApp%20Image%202026-03-09%20at%2015.43.56wqeqweqw.jpeg',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'Depoimento real de cliente.',
    },
    {
        id: 9,
        name: 'Cliente',
        role: 'Depoimento real',
        image: 'https://ntsuddpjnvgkhkpufisc.supabase.co/storage/v1/object/public/Midias-Clientes/WhatsApp%20Image%202026-03-09%20at%2015.43.56.jpeg',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'Depoimento real de cliente.',
    },
    {
        id: 10,
        name: 'Cliente',
        role: 'Depoimento real',
        image: 'https://ntsuddpjnvgkhkpufisc.supabase.co/storage/v1/object/public/Midias-Clientes/WhatsApp%20Image%202026-03-09%20at%2015.43.55.jpeg',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'Depoimento real de cliente.',
    },
].map((t) => ({ ...t, isRealImage: true }));
