<template>
  <AmbientBackground />
  <v-container>
    <!-- Hero Section -->
    <v-row class="text-center my-8">
      <v-col cols="12">
        <h1 class="text-h2 font-weight-bold mb-4">
          <span class="text-primary">PrinterHive</span>
        </h1>
        <p class="text-h6 grey--text">
          Advanced Remote Management Solution for 3D Printers
        </p>
      </v-col>
    </v-row>

    <!-- Mission Statement -->
    <v-row class="my-8">
      <v-col cols="12" md="8" offset-md="2">
        <v-card elevation="2" class="pa-6">
          <h2 class="text-h4 mb-4 font-weight-medium">Our Mission</h2>
          <p class="text-body-1">
            PrinterHive revolutionizes 3D printer management by providing a comprehensive, 
            secure, and intuitive platform for remote monitoring and control. We empower 
            makers, professionals, and businesses to achieve maximum efficiency in their 
            3D printing operations.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Timeline Section -->
    <v-row class="my-12">
      <v-col cols="12">
        <h2 class="text-h4 mb-8 text-center font-weight-medium">Our Journey</h2>
        <v-timeline>
          <AboutTimelineCard
            v-for="(item, i) in timelineItems"
            :key="i"
            :item="item"
          />
        </v-timeline>
      </v-col>
    </v-row>

    <!-- Features Grid -->
    <v-row class="my-8">
      <v-col cols="12">
        <h2 class="text-h4 mb-8 text-center font-weight-medium">Key Features</h2>
      </v-col>
      <v-col
        v-for="(feature, i) in features"
        :key="i"
        cols="12"
        md="4"
      >
        <v-card height="100%" elevation="2" class="d-flex flex-column">
          <v-card-title class="text-h6">
            <v-icon left :color="feature.iconColor" class="mr-2">
              {{ feature.icon }}
            </v-icon>
            {{ feature.title }}
          </v-card-title>
          <v-card-text class="flex-grow-1">
            {{ feature.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Contact Section -->
    <v-row class="my-8">
      <v-col cols="12" md="8" offset-md="2">
        <v-card elevation="2" class="text-center pa-6">
          <h2 class="text-h4 mb-4 font-weight-medium">Get in Touch</h2>
          <p class="text-body-1 mb-4">
            Have questions about PrinterHive? We'd love to hear from you!
          </p>
          <v-btn
            color="primary"
            x-large
            rounded
          >
            Contact Us
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AmbientBackground from '@/components/AppAmbientBackground.vue';
import AboutTimelineCard from '@/components/AboutTimelineCard.vue';
export default defineComponent({
  name: 'AboutView',
  components: {
    AmbientBackground,
    AboutTimelineCard
  },
  data() {
    return {
      timelineItems: [
        {
          year: '2022',
          title: 'Project Launch',
          description: 'PrinterHive began as an ambitious project to simplify 3D printer management.',
          color: 'primary'
        },
        {
          year: '2023',
          title: 'First Major Release',
          description: 'Launched our core features including real-time monitoring and remote control capabilities.',
          color: 'success'
        },
        {
          year: '2024',
          title: 'Advanced Analytics',
          description: 'Introduced AI-powered print failure detection and advanced analytics dashboard.',
          color: 'info'
        },
        {
          year: '2025',
          title: 'Going Enterprise',
          description: 'Expanded our solution to support large-scale industrial 3D printing operations.',
          color: 'deep-purple'
        }
      ],
      features: [
        {
          title: 'Real-time Monitoring',
          description: 'Monitor your 3D printers in real-time with high-definition video feeds and detailed sensor data.',
          icon: 'mdi-monitor-dashboard',
          iconColor: 'primary'
        },
        {
          title: 'Remote Control',
          description: 'Control your printers from anywhere with secure remote access and command capabilities.',
          icon: 'mdi-remote',
          iconColor: 'success'
        },
        {
          title: 'Smart Analytics',
          description: 'Make data-driven decisions with our advanced analytics and reporting tools.',
          icon: 'mdi-chart-bar',
          iconColor: 'info'
        }
      ]
    };
  },
});
</script>
