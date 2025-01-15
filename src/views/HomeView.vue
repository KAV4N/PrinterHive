<template>
  <AmbientBackground />
  <v-container class="pa-0">
    <home-hero-section />

    <!-- Key Features Section -->
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-3">Why PrinterHive?</h2>
          <p class="text-subtitle-1">Complete control over your 3D printer fleet from anywhere</p>
        </v-col>

        <v-col v-for="(feature, index) in keyFeatures" :key="index" cols="12" md="4">
          <home-key-feature-card :feature="feature" />
        </v-col>
      </v-row>
    </v-container>

    <!-- Live Dashboard Preview -->
    <v-container fluid class="py-16">
      <v-row justify="center">
        <v-col cols="12" md="10">
          <home-dashboard-preview :features="dashboardFeatures" />
        </v-col>
      </v-row>
    </v-container>

    <!-- Real-time Monitoring Section -->
    <v-container class="py-16">
      <home-monitoring-section
        :temperature-data="temperatureData"
        :print-progress="printProgress"
        :features="monitoringFeatures"
      />
    </v-container>

    <!-- Testimonials Section -->
    <v-container fluid class="py-16">
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-3">What Our Users Say</h2>
          <p class="text-subtitle-1">Join thousands of satisfied PrinterHive users</p>
        </v-col>
        <v-col cols="12">
          <v-slide-group show-arrows class="pa-4">
            <v-slide-group-item v-for="(testimonial, index) in testimonials" :key="index">
              <home-testimonial-card :testimonial="testimonial" />
            </v-slide-group-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-container>

    <!-- Pricing Section -->
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-3">Simple, Transparent Pricing</h2>
          <p class="text-subtitle-1">No hidden fees, no complicated tiers</p>
        </v-col>
        <v-col cols="12" md="4">
          <home-pricing-card :features="pricingFeatures" />
        </v-col>
      </v-row>
    </v-container>

    <!-- Call to Action -->
    <v-container fluid class="py-16 bg-primary">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-4">
            Ready to Transform Your 3D Printing Workflow?
          </h2>
          <p class="text-h6 mb-8">Join thousands of makers and businesses who trust PrinterHive</p>
          <v-btn
            size="x-large"
            color="white"
            class="mr-4"
            prepend-icon="mdi-rocket-launch"
            to="/download"
          >
            Download
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AmbientBackground from '@/components/AppAmbientBackground.vue';
import HomeHeroSection from '@/components/HomeHeroSection.vue';
import HomeKeyFeatureCard from '@/components/HomeKeyFeatureCard.vue';
import HomeDashboardPreview from '@/components/HomeDashboardPreview.vue';
import HomeMonitoringSection from '@/components/HomeMonitoringSection.vue';
import HomeTestimonialCard from '@/components/HomeTestimonialCard.vue';
import HomePricingCard from '@/components/HomePricingCard.vue';
import type {Testimonial, KeyFeature, DashboardFeature} from '@/types/home'

export default defineComponent({
  name: 'HomeView',
  components: {
    AmbientBackground,
    HomeHeroSection,
    HomeKeyFeatureCard,
    HomeDashboardPreview,
    HomeMonitoringSection,
    HomeTestimonialCard,
    HomePricingCard
  },
  data() {
    return {
      showDemo: false,
      printProgress: 78,
      temperatureData: [
        180, 185, 190, 195, 200, 205, 205, 205, 204, 205,
        205, 205, 206, 205, 205, 204, 205, 205, 205, 205
      ],
      keyFeatures: [
        {
          title: 'Remote Management',
          description: 'Control and monitor your 3D printers from anywhere in the world with secure remote access.',
          icon: 'mdi-remote',
          color: 'primary'
        },
        {
          title: 'Smart Analytics',
          description: 'Make data-driven decisions with comprehensive analytics and reporting tools.',
          icon: 'mdi-chart-box',
          color: 'secondary'
        },
        {
          title: 'AI Monitoring',
          description: 'Detect print failures early with our advanced AI-powered monitoring system.',
          icon: 'mdi-brain',
          color: 'info'
        }
      ] as KeyFeature[],
      dashboardFeatures: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Intuitive Interface',
          subtitle: 'Easy-to-use dashboard for all your printers'
        },
        {
          icon: 'mdi-printer-3d-nozzle',
          title: 'Temperature Control',
          subtitle: 'Precise control over nozzle and bed temperatures'
        },
        {
          icon: 'mdi-camera',
          title: 'Live Monitoring',
          subtitle: 'Real-time video feeds with AI failure detection'
        },
        {
          icon: 'mdi-file-document',
          title: 'Job Management',
          subtitle: 'Organize and queue print jobs efficiently'
        }
      ] as DashboardFeature[],
      monitoringFeatures: [
        'Real-time temperature graphs',
        'Live camera feeds with zoom',
        'Print progress tracking',
        'Automatic failure detection',
        'Mobile notifications',
        'Historical data logging'
      ],
      testimonials: [
        {
          name: 'John Smith',
          role: 'Manufacturing Manager',
          content: 'PrinterHive has revolutionized how we manage our 3D printer farm. The remote monitoring capabilities have saved us countless hours of manual checking.'
        },
        {
          name: 'Sarah Johnson',
          role: 'Product Designer',
          content: 'The ability to monitor prints remotely and get instant notifications about any issues has been a game-changer for our prototyping workflow.'
        },
        {
          name: 'Michael Chen',
          role: 'Education Director',
          content: 'Managing our university\'s 3D printing lab has never been easier. PrinterHive\'s interface is intuitive and the analytics help us optimize usage.'
        },
        {
          name: 'Emma Davis',
          role: 'Maker Space Owner',
          content: 'The fact that PrinterHive is free while offering enterprise-level features is amazing. It\'s perfect for our community maker space.'
        }
      ] as Testimonial[],
      pricingFeatures: [
        'Unlimited Printers',
        'Real-time Monitoring',
        'Remote Control',
        'AI Failure Detection',
        'Analytics Dashboard',
        'Email Support',
        'Community Access',
        'Regular Updates'
      ]
    };
  }
});
</script>


<style scoped>

.temperature-graph {
  height: 100px;
}

</style>
