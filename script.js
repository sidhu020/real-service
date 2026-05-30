// Pre-select appliance value from cards
function preselectAppliance(value) {
    const selectEl = document.getElementById('appliance');
    if (selectEl) {
        selectEl.value = value;
    }
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Config details into static elements
    const elementsToInject = {
        'header-brand-short': appConfig.shortName,
        'header-brand-full': appConfig.brandName,
        'header-brand-sub': appConfig.subtitle,
        'header-phone-text': appConfig.primaryPhone,
        'header-phone-link': `tel:${appConfig.primaryPhone}`,
        
        'hero-rating-val': appConfig.ratingText,
        'hero-repairs-val': appConfig.repairsText,
        'hero-spares-val': appConfig.genuineText,
        'hero-phone-call-btn': `tel:${appConfig.primaryPhone}`,
        'hero-whatsapp-btn': `https://wa.me/91${appConfig.whatsappSecondary}`,
        
        'about-experience-title': appConfig.aboutYear,
        
        'booking-phone-label-1': appConfig.primaryPhone,
        'booking-phone-label-2': appConfig.secondaryPhone,
        'booking-phone-val-1': appConfig.primaryPhone,
        'booking-phone-val-2': appConfig.secondaryPhone,
        
        'footer-brand-short': appConfig.shortName,
        'footer-brand-full': appConfig.brandName,
        'footer-phone-1': appConfig.primaryPhone,
        'footer-phone-1-link': `tel:${appConfig.primaryPhone}`,
        'footer-phone-2': appConfig.secondaryPhone,
        'footer-phone-2-link': `tel:${appConfig.secondaryPhone}`,
        'footer-wa-1': appConfig.primaryPhone,
        'footer-wa-1-link': `https://wa.me/91${appConfig.primaryPhone}`,
        'footer-wa-2': appConfig.secondaryPhone,
        'footer-wa-2-link': `https://wa.me/91${appConfig.secondaryPhone}`,
        'footer-location': appConfig.operatingLocation,
        'footer-hours': appConfig.operatingHours,
        'footer-copyright': `&copy; ${new Date().getFullYear()} ${appConfig.brandName}. All Rights Reserved. Multi-Brand Appliance Repair Support.`,
        
        'floating-whatsapp': `https://wa.me/91${appConfig.whatsappPrimary}`,
        'mobile-sticky-call': `tel:${appConfig.primaryPhone}`
    };

    // Run injections
    Object.keys(elementsToInject).forEach(id => {
        const els = document.querySelectorAll(`[data-inject="${id}"]`);
        els.forEach(el => {
            if (el.tagName === 'A') {
                el.href = elementsToInject[id];
            } else {
                el.innerHTML = elementsToInject[id];
            }
        });
    });

    // 2. Render Trust Badges
    const trustContainer = document.getElementById('trust-badges-container');
    if (trustContainer && typeof trustBadges !== 'undefined') {
        trustContainer.innerHTML = trustBadges.map(badge => `
            <div class="reveal bg-brand-50/50 p-6 rounded-2xl border border-brand-100/50 hover:border-brand-300 hover:bg-brand-50 transition-all text-center flex flex-col items-center">
                <div class="bg-white text-brand-500 p-3 rounded-xl shadow-sm mb-4">
                    ${badge.iconSvg}
                </div>
                <h3 class="font-bold text-sm text-slate-800 leading-tight">${badge.title}</h3>
            </div>
        `).join('');
    }

    // 3. Render Brands Strip
    const brandsContainer = document.getElementById('brands-container');
    if (brandsContainer && typeof brandsWeRepair !== 'undefined') {
        brandsContainer.innerHTML = brandsWeRepair.map(brand => `
            <span class="text-xl font-bold tracking-wider text-slate-600 hover:text-brand-600 transition-colors cursor-default select-none">${brand}</span>
        `).join('');
    }

    // 4. Render Services
    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer && typeof servicesData !== 'undefined') {
        servicesContainer.innerHTML = servicesData.map(service => `
            <div class="reveal bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div class="h-56 relative overflow-hidden">
                    <img src="${service.imageUrl}" 
                         alt="${service.title}" 
                         class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                    <span class="absolute top-4 left-4 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">${service.badge}</span>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-slate-900 mb-2">${service.title}</h3>
                    <p class="text-slate-600 text-sm mb-6 flex-grow">
                        ${service.description}
                    </p>
                    <a href="#booking" onclick="preselectAppliance('${service.preselectId}')" class="w-full text-center bg-brand-50 hover:bg-brand-500 text-brand-700 hover:text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                        <span>Book Repair</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                </div>
            </div>
        `).join('');
    }

    // 5. Render Why Choose Us Points
    const whyChooseContainer = document.getElementById('why-choose-us-container');
    if (whyChooseContainer && typeof whyChooseUsData !== 'undefined') {
        whyChooseContainer.innerHTML = whyChooseUsData.map(point => `
            <div class="reveal bg-slate-50 hover:bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div class="bg-brand-100 text-brand-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    ${point.iconSvg}
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-2">${point.title}</h3>
                <p class="text-slate-600 text-sm">
                    ${point.description}
                </p>
            </div>
        `).join('');
    }

    // 6. WhatsApp booking form event listener
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const address = document.getElementById('address').value.trim();
            const appliance = document.getElementById('appliance').value;
            const brand = document.getElementById('brand').value;
            const problem = document.getElementById('problem').value.trim();
            
            // Selected WhatsApp target number
            const targetPhoneEl = document.querySelector('input[name="contact_phone"]:checked');
            const targetNumber = targetPhoneEl ? targetPhoneEl.value : appConfig.whatsappPrimary;

            // Check validations
            if(!name || !phone || !address || !appliance || !brand || !problem) {
                alert("Please fill all the required fields.");
                return;
            }

            // Message template formatting
            const message = `*New Service Booking Request - ${appConfig.brandName}*\n` +
                            `----------------------------------------\n` +
                            `*Customer Name:* ${name}\n` +
                            `*Mobile Number:* ${phone}\n` +
                            `*Address:* ${address}\n` +
                            `*Appliance Type:* ${appliance}\n` +
                            `*Brand:* ${brand}\n` +
                            `*Problem Details:* ${problem}\n` +
                            `----------------------------------------\n` +
                            `Requested via ${appConfig.brandName} Website. Please confirm.`;

            // Encode string
            const encodedText = encodeURIComponent(message);
            
            // Build wa.me url
            const whatsappUrl = `https://wa.me/91${targetNumber}?text=${encodedText}`;
            
            // Redirect user
            window.open(whatsappUrl, '_blank');
        });
    }

    // 7. Toggle mobile menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconSvg = document.getElementById('menu-icon-svg');

    if (menuBtn && mobileMenu && menuIconSvg) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isHidden = mobileMenu.classList.contains('hidden');
            
            // Swap inner SVG path depending on state
            if (isHidden) {
                menuIconSvg.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>';
            } else {
                menuIconSvg.innerHTML = '<line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>';
            }
        });

        // Close mobile menu on clicking any link inside it
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIconSvg.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>';
            });
        });
    }

    // 8. Scroll reveal effects
    function revealElements() {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealElements);
    revealElements(); // Initial run
});
