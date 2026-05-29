<template>
  <div class="min-h-screen">
    <NovaNavbar />

    <main>
      <HeroSection />
      <TrustedBySection />
      <AiFeaturesSection />
      <MarketplaceSection />
      <DashboardPreviewSection />
      <AiToolInteractionSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </main>

    <NovaFooter />
  </div>
</template>

<script setup lang="ts">
import NovaNavbar from "../sections/navbar/NovaNavbar.vue";
import HeroSection from "../sections/hero/HeroSection.vue";
import TrustedBySection from "../sections/trusted/TrustedBySection.vue";
import AiFeaturesSection from "../sections/features/AiFeaturesSection.vue";
import MarketplaceSection from "../sections/marketplace/MarketplaceSection.vue";
import DashboardPreviewSection from "../sections/dashboard/DashboardPreviewSection.vue";
import AiToolInteractionSection from "../sections/ai/AiToolInteractionSection.vue";
import TestimonialsSection from "../sections/testimonials/TestimonialsSection.vue";
import PricingSection from "../sections/pricing/PricingSection.vue";
import FaqSection from "../sections/faq/FaqSection.vue";
import FinalCtaSection from "../sections/finalCta/FinalCtaSection.vue";
import NovaFooter from "../sections/footer/NovaFooter.vue";
</script>
