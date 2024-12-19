
<template>
    <v-container>
      <WelcomeSection />
      <PromoSection />
      <Carousel />

      <FeaturesSection :featureTabs="featureTabs" />

      <TestimonialsSection :testimonials="testimonials" />
      <CallToActionSection />
    </v-container>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WelcomeSection from '@/components/Home/WelcomeSection.vue';
import Carousel from '@/components/Home/Carousel.vue';
import FeaturesSection from '@/components/Home/FeaturesSection.vue';
import PromoSection from '@/components/Home/PromoSection.vue';
import TestimonialsSection from '@/components/Home/TestimonialsSection.vue';
import CallToActionSection from '@/components/Home/CallToActionSection.vue';

interface FeatureTab {
  title: string;
  image: string;
  description: string;
}

interface Testimonial {
  name: string;
  image: string;
  comment: string;
}


export default defineComponent({
  name: 'HomeView',
  components: {
    WelcomeSection,
    Carousel,
    FeaturesSection,
    PromoSection,
    TestimonialsSection,
    CallToActionSection,
  },
  data() {
    return {
      featureTabs: [
        { title: 'Remote Monitoring', image: '/images/feature1.png', description: 'Description...' },
        { title: 'Print Management', image: '/images/feature2.png', description: 'Description...' },
        { title: 'Cloud Integration', image: '/images/feature3.png', description: 'Description...' },
      ] as FeatureTab[],
      testimonials: [
        { name: 'John Doe', image: '/images/user1.jpg', comment: 'Description...' },
        { name: 'Jane Smith', image: '/images/user2.jpg', comment: 'Description...' },
        { name: 'Chris Adams', image: '/images/user3.jpg', comment: 'Description...' },
      ] as Testimonial[],
    };
  },
});
</script>
