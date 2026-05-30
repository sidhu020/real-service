// Website Configuration & Content Data Modules
// Easy to modify, add, or remove services and contact details without editing layout HTML

const appConfig = {
    brandName: "Real Sale & Service",
    shortName: "RSS",
    subtitle: "RAJKOT AUTHORIZED CENTER",
    primaryPhone: "9824203830",
    secondaryPhone: "8460589338",
    whatsappPrimary: "9824203830",
    whatsappSecondary: "8460589338",
    operatingHours: "Daily: 9:00 AM - 8:00 PM",
    operatingLocation: "Rajkot, Gujarat (Kalavad Rd, Yagnik Rd, Amin Marg, Raiya, Mavdi, etc.)",
    aboutYear: "Experienced Customer Care in Rajkot",
    ratingText: "Highly Rated",
    repairsText: "Thousands Completed",
    genuineText: "100% Genuine Spares"
};

// Trust badges shown below Hero Section
const trustBadges = [
    {
        title: "Authorized Center",
        // Icon path matches Lucide award
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`
    },
    {
        title: "Certified Techs",
        // User check icon
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></svg>`
    },
    {
        title: "Genuine Parts",
        // Component icon
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12z"/><path d="m12 2 3.5 3.5L12 9 8.5 5.5z"/><path d="M18.5 8.5 22 12l-3.5 3.5-3.5-3.5z"/><path d="m12 15 3.5 3.5-3.5 3.5-3.5-3.5z"/></svg>`
    },
    {
        title: "Same Day Repair",
        // Truck icon
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect width="16" height="12" x="2" y="6" rx="2"/><path d="M16 8h4l3 3v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a2 2 0 0 1-2-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>`
    },
    {
        title: "Doorstep Support",
        // Home icon
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
    },
    {
        title: "Happy Customers",
        // Heart icon
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
    }
];

// Brands strip
const brandsWeRepair = [
    "SAMSUNG", "LG Electronics", "Whirlpool", "IFB", "BOSCH", "Panasonic", "Haier", "VOLTAS"
];

// Service offerings
const servicesData = [
    {
        title: "Air Conditioner Repair",
        badge: "AC Repair",
        preselectId: "Air Conditioner",
        description: "Expert split & window AC installation, gas refilling, filter cleaning, cooling issues resolution, and periodic maintenance service.",
        imageUrl: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Refrigerator Repair",
        badge: "Refrigerators",
        preselectId: "Refrigerator",
        description: "Single door, double door, and side-by-side smart fridge cooling problems, compressor issues, gas leaks, thermostat repairs.",
        imageUrl: "https://images.unsplash.com/photo-1571175432230-01902f5cf20d?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Washing Machine Repair",
        badge: "Washing Machines",
        preselectId: "Washing Machine",
        description: "Front-load, top-load, and semi-automatic washing machine repair. Expert resolution for spin issues, water leaks, and drum noise.",
        imageUrl: "https://images.unsplash.com/photo-1582730147233-ac8112440600?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Microwave Oven Repair",
        badge: "Microwaves",
        preselectId: "Microwave Oven",
        description: "Quick repair of heating components, magnetron failures, keypad errors, spark issues, turntable plate faults in convection and grill models.",
        imageUrl: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "LED TV Repair",
        badge: "LED TVs",
        preselectId: "LED TV",
        description: "Reliable panel replacement, motherboard servicing, backlight repair, sound-but-no-picture fixes, and power supply repairs.",
        imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "RO Water Purifier Service",
        badge: "Water Purifiers",
        preselectId: "Water Purifier",
        description: "Full filter replacements, membrane cleaning, TDS adjustment, leakage control, motor fixes, and quarterly health checkups.",
        imageUrl: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80"
    }
];

// Why choose us points
const whyChooseUsData = [
    {
        title: "Verified Technicians",
        description: "All our servicemen are background checked, certified, and trained on local household needs.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></svg>`
    },
    {
        title: "Affordable Pricing",
        description: "Honest flat rates. Standard visitation fees that get waived when you approve repairs.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3a4 4 0 0 0 0-8"/></svg>`
    },
    {
        title: "Genuine Spare Parts",
        description: "We only use company-authorized OEM replacement components with genuine quality.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z"/></svg>`
    },
    {
        title: "Service Quality Support",
        description: "We stand by the quality of our service with quick follow-up callbacks and customer support.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`
    },
    {
        title: "Fast Booking Redirection",
        description: "Instantly books details directly onto your WhatsApp app without complex form waiting.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
    },
    {
        title: "Trusted Local Service",
        description: "Serving Kalavad Road, Yagnik Road, 150ft Ring Road, Raiya, Mavdi, and all Rajkot areas.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`
    }
];
