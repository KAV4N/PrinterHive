<template>
  <AmbientBackground />
  <v-container class="pa-0">
    <!-- Hero Section with 3D Printer Animation -->
    <v-row no-gutters>
      <v-col cols="12">
        <v-parallax
          src="@/assets/hero-bg.jpg"
          height="100vh"
        >
          <v-container class="fill-height">
            <v-row align="center" justify="center">
              <v-col cols="12" md="8" class="text-center">
                <div>
                  <h1 class="text-h1 font-weight-bold mb-6">
                    <span class="text-primary">PrinterHive</span>
                    </h1>

                  <p class="text-h4 mb-8">
                    Your All-in-One 3D Printer Management Solution
                  </p>
                  <v-btn
                      size="x-large"
                      color="primary"
                      variant="elevated"
                      class="mr-4"
                      to="/features"
                  >
                      Explore Features
                      <v-icon right class="ml-2">mdi-arrow-right</v-icon>
                  </v-btn>
                  <v-btn
                    size="x-large"
                    variant="outlined"
                    class="ml-4"
                    to="/demo"
                >
                    Try Demo
                    <v-icon right class="ml-2">mdi-play</v-icon>
                </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </v-col>
    </v-row>

    <!-- Key Features Section -->
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-3">Why PrinterHive?</h2>
          <p class="text-subtitle-1">Complete control over your 3D printer fleet from anywhere</p>
        </v-col>

        <v-col
          v-for="(feature, index) in keyFeatures"
          :key="index"
          cols="12"
          md="4"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 12 : 2"
              class="pa-6 h-100"
            >
              <div class="d-flex flex-column align-center">
                <v-icon
                  :color="feature.color"
                  size="64"
                  class="mb-4"
                >
                  {{ feature.icon }}
                </v-icon>
                <h3 class="text-h5 font-weight-bold mb-4 text-center">
                  {{ feature.title }}
                </h3>
                <p class="text-body-1 text-center mb-0">
                  {{ feature.description }}
                </p>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <!-- Live Dashboard Preview -->
    <v-container fluid class="py-16">
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card elevation="8" class="overflow-hidden">
            <v-row no-gutters>
              <v-col cols="12" md="6" class="pa-8">
                <h2 class="text-h4 font-weight-bold mb-4">
                  Powerful Dashboard
                </h2>
                <p class="text-body-1 mb-6">
                  Monitor all your printers in real-time with our intuitive dashboard. 
                  Track temperatures, progress, and status at a glance.
                </p>
                <v-list select-strategy="classic">
                  <v-list-item
                    v-for="(feature, index) in dashboardFeatures"
                    :key="index"
                    :prepend-icon="feature.icon"
                    :title="feature.title"
                    :subtitle="feature.subtitle"
                  >
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="12" md="6">
                <v-img
                  src="@/assets/dashboard-preview.png"
                  cover
                  height="100%"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Real-time Monitoring Section -->
    <v-container class="py-16">
      <v-row align="center">
        <v-col cols="12" md="6" order="2" order-md="1">
          <v-card class=" pa-4" elevation="8">
            <div>
              <v-sheet class="pa-4" rounded>
                <div class="d-flex align-center mb-4">
                  <div class="temperature-graph flex-grow-1">
                    <v-sparkline
                      :value="temperatureData"
                      :gradient="['#FF0000', '#FF8A00']"

                      stroke-linecap="round"
                      gradient-direction="top"
                      line-width="2"
                      padding="4"
                      height="100"
                    ></v-sparkline>
                  </div>
                  <div class="temperature-stats px-4">
                    <div class="text-h4 font-weight-bold">205°C</div>
                    <div class="text-caption">Nozzle Temp</div>
                  </div>
                </div>
                <v-progress-linear
                  v-model="printProgress"
                  height="20"
                  color="primary"
                  striped
                >
                  <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}% Complete</strong>
                  </template>
                </v-progress-linear>
              </v-sheet>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" order="1" order-md="2" class="pa-8">
          <h2 class="text-h4 font-weight-bold mb-4">
            Real-Time Monitoring
          </h2>
          <p class="text-body-1 mb-6">
            Keep track of every detail with advanced monitoring capabilities.
            Monitor temperatures, view live camera feeds, and track print progress in real-time.
          </p>
          <v-list>
            <v-list-item
              v-for="(feature, index) in monitoringFeatures"
              :key="index"
              :title="feature"
              prepend-icon="mdi-check-circle"
              color="success"
            ></v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>

    <!-- Testimonials Section -->
    <v-container fluid class="py-16">
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-3">What Our Users Say</h2>
          <p class="text-subtitle-1">Join thousands of satisfied PrinterHive users</p>
        </v-col>
        <v-col cols="12">
          <v-slide-group
            show-arrows
            class="pa-4"
          >
            <v-slide-group-item
              v-for="(testimonial, index) in testimonials"
              :key="index"
            >
              <v-card
                class="mx-4"
                width="400"
                elevation="4"
              >
                <v-card-text class="pa-6">
                  <div class="d-flex align-center mb-4">
                    <v-avatar color="primary" size="48" class="mr-4">
                      <span class="text-h6">
                        {{ testimonial.name.charAt(0) }}
                      </span>
                    </v-avatar>
                    <div>
                      <div class="text-h6">{{ testimonial.name }}</div>
                      <div class="text-caption">{{ testimonial.role }}</div>
                    </div>
                  </div>
                  <p class="text-body-1 mb-4">{{ testimonial.content }}</p>
                  <v-rating
                    :model-value="5"
                    color="amber"
                    density="compact"
                    readonly
                    size="small"
                  ></v-rating>
                </v-card-text>
              </v-card>
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
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 12 : 2"
              class="pa-6 h-100"
              color="primary"
            >
              <v-card-title class="text-h4 font-weight-bold mb-4">
                Free Forever
              </v-card-title>
              <v-card-text>
                <div class="text-h3 font-weight-bold  mb-4">
                  $0
                  <span class="text-body-1">/month</span>
                </div>
                <v-list bg-color="transparent">
                  <v-list-item
                    v-for="(feature, index) in pricingFeatures"
                    :key="index"
                    :title="feature"
                    prepend-icon="mdi-check-circle"
                  ></v-list-item>
                </v-list>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  block
                  color="white"
                  class="text-primary"
                  size="x-large"
                >
                  Get Started Now
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <!-- Call to Action -->

  </v-container>
  <v-container fluid class="py-16 bg-primary">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-4">
            Ready to Transform Your 3D Printing Workflow?
          </h2>
          <p class="text-h6 mb-8">
            Join thousands of makers and businesses who trust PrinterHive
          </p>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AmbientBackground from '@/components/Common/AmbientBackground.vue';
interface KeyFeature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface DashboardFeature {
  icon: string;
  title: string;
  subtitle: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

export default defineComponent({
  name: 'HomeView',
  components: {
    AmbientBackground

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
  },

  methods: {
  }
});
</script>

<style scoped>

.temperature-graph {
  height: 100px;
}


</style>
