<template>
  <v-container>
    <v-parallax
      src="@/assets/3d-printing-hero.jpg"
      class="rounded-lg mb-16"
      height="400"
    >
      <v-row class="align-center fill-height">
        <v-col cols="12" class="text-center">
          <h1 class="text-h2 font-weight-bold  mb-4"><span class="text-primary">PrinterHive</span> Features</h1>
          <p class="text-h5">Enterprise-Grade 3D Printer Fleet Management - Now Free</p>
          <v-btn
            color="primary"
            size="x-large"
            class="mt-4"
            prepend-icon="mdi-rocket-launch"
            to="/download"
          >
            Get Started Now
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>

    <!-- Value Proposition Section -->
    <v-row class="mb-16">
      <v-col cols="12" class="text-center">
        <h2 class="text-h3 font-weight-bold mb-8">Why Choose PrinterHive?</h2>
        <v-row>
          <v-col v-for="(value, index) in valuePropositions" :key="index" cols="12" md="4">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                :elevation="isHovering ? 12 : 2"
                class="pa-6 transition-swing h-100"
              >
                <div class="d-flex flex-column align-center">
                  <v-avatar
                    :color="value.color"
                    size="72"
                    class="mb-4"
                  >
                    <v-icon size="36" color="white">{{ value.icon }}</v-icon>
                  </v-avatar>
                  <h3 class="text-h5 font-weight-bold mb-4">{{ value.title }}</h3>
                  <p class="text-body-1 text-center">{{ value.description }}</p>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Main Features Grid with Interactive Cards -->
    <v-row class="mb-16">
      <v-col cols="12">
        <h2 class="text-h3 font-weight-bold text-center mb-8">Core Features</h2>
        <v-row>
          <v-col v-for="(feature, index) in mainFeatures" :key="index" cols="12" md="4">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                :elevation="isHovering ? 12 : 2"
                class="h-100"
              >
                <v-img
                  :src="feature.image"
                  height="200"
                  cover
                  class="align-end"
                >
                  <v-card-title class="bg-black bg-opacity-50 py-4">
                    {{ feature.title }}
                  </v-card-title>
                </v-img>
                <v-card-text class="pt-4">
                  <p class="text-body-1">{{ feature.description }}</p>
                  <v-list>
                    <v-list-item
                      v-for="(subFeature, idx) in feature.subFeatures"
                      :key="idx"
                      :title="subFeature"
                      prepend-icon="mdi-check-circle"
                      :color="feature.color"
                      density="compact"
                    ></v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Advanced Features Timeline -->
    <v-row class="mb-16">
      <v-col cols="12">
        <h2 class="text-h3 font-weight-bold text-center mb-8">Advanced Capabilities</h2>
        <v-timeline side="end" align="start">
          <v-timeline-item
            v-for="(feature, index) in advancedFeatures"
            :key="index"
            :dot-color="feature.color"
            size="small"
          >
            <template v-slot:opposite>
              <v-chip
                :color="feature.color"
                label
                class="mb-2"
              >
                {{ feature.category }}
              </v-chip>
            </template>
            <v-card>
              <v-card-title class="d-flex align-center">
                <v-icon :color="feature.color" class="mr-2">{{ feature.icon }}</v-icon>
                {{ feature.title }}
              </v-card-title>
              <v-card-text>
                <p>{{ feature.description }}</p>
                <v-chip-group>
                  <v-chip
                    v-for="(tag, idx) in feature.tags"
                    :key="idx"
                    variant="outlined"
                    size="small"
                  >
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

    <!-- Integration Partners -->
    <v-row class="mb-16">
      <v-col cols="12">
        <h2 class="text-h3 font-weight-bold text-center mb-8">Integration Partners</h2>
        <v-slide-group show-arrows>
          <v-slide-group-item
            v-for="(partner, index) in integrationPartners"
            :key="index"
          >
            <v-card
              class="ma-4"
              width="200"
              height="150"
              variant="outlined"
            >
              <v-img
                :src="partner.logo"
                height="100"
                contain
                class="pa-4"
              ></v-img>
              <v-card-text class="text-center pt-0">
                {{ partner.name }}
              </v-card-text>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
    </v-row>

    <!-- Statistics with Animation -->
    <v-row class="mb-16">
      <v-col cols="12">
        <v-card class="statistics-card">
          <v-card-text>
            <v-row>
              <v-col
                v-for="(stat, index) in statistics"
                :key="index"
                cols="12"
                md="3"
                class="text-center py-8"
              >
                <v-scale-transition>
                  <div>
                    <div class="text-h2 font-weight-bold" :class="stat.color">
                      {{ stat.value }}
                    </div>
                    <div class="text-h6 mt-2">{{ stat.label }}</div>
                    <div class="text-caption">{{ stat.subtext }}</div>
                  </div>
                </v-scale-transition>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Pricing Comparison -->
    <v-row class="mb-16">
      <v-col cols="12">
        <h2 class="text-h3 font-weight-bold text-center mb-8">Compare with Others</h2>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Feature</th>
              <th class="text-center">PrinterHive</th>
              <th class="text-center">Others</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(comparison, index) in comparisons" :key="index">
              <td>{{ comparison.feature }}</td>
              <td class="text-center">
                <v-icon :color="comparison.printerhive ? 'success' : 'error'">
                  {{ comparison.printerhive ? 'mdi-check-circle' : 'mdi-close-circle' }}
                </v-icon>
              </td>
              <td class="text-center">
                <v-icon :color="comparison.others ? 'success' : 'error'">
                  {{ comparison.others ? 'mdi-check-circle' : 'mdi-close-circle' }}
                </v-icon>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>

    <!-- Call to Action with Demo Booking -->
    <v-row class="mb-16">
      <v-col cols="12" class="text-center">
        <v-card class="pa-8 bg-primary">
          <h2 class="text-h3 font-weight-bold  mb-4">Ready to Transform Your 3D Printing Workflow?</h2>
          <p class="text-h6  mb-8">Join thousands of satisfied users who have revolutionized their 3D printing management</p>
          <v-row justify="center" align="center">
            <v-col cols="12" md="4">
              <v-btn
                block
                size="x-large"
                color="white"
                class="text-secundary"
                prepend-icon="mdi-rocket-launch"
                to="/download"
              >
                Download
              </v-btn>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn
                block
                size="x-large"
                variant="outlined"
                to="/demo"
              >
                Try Demo
                <v-icon right class="ml-2">mdi-play</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FeaturesView',
  data() {
    return {
      demoDialog: false,
      demoForm: false,
      demoData: {
        name: '',
        email: '',
        printerCount: null,
        message: ''
      },
      printerCountOptions: [
        '1-5 printers',
        '6-20 printers',
        '21-50 printers',
        '50+ printers'
      ],
      valuePropositions: [
        {
          title: 'Enterprise Features',
          description: 'Get enterprise-grade features completely free, including advanced monitoring, analytics, and remote control capabilities.',
          icon: 'mdi-star',
          color: 'primary'
        },
        {
          title: 'Open Source',
          description: 'Built on open-source principles, ensuring transparency, community-driven development, and unlimited customization potential.',
          icon: 'mdi-open-source-initiative',
          color: 'secondary'
        },
        {
          title: 'Community Powered',
          description: 'Join a thriving community of 3D printing enthusiasts and professionals sharing knowledge and resources.',
          icon: 'mdi-account-group',
          color: 'info'
        }
      ],
      mainFeatures: [
        {
          title: 'Intelligent Fleet Management',
          description: 'Manage your entire printer fleet from a single dashboard with smart automation and scheduling.',
          image: '@/assets/fleet-management.jpg',
          color: 'primary',
          subFeatures: [
            'Smart queue management',
            'Automated job distribution',
            'Printer health monitoring',
            'Real-time status updates'
          ]
        },
        {
          title: 'Advanced Analytics Suite',
          description: 'Make data-driven decisions with comprehensive analytics and reporting tools.',
          image: '@/assets/analytics.jpg',
          color: 'secondary',
          subFeatures: [
            'Success rate tracking',
            'Cost analysis',
            'Performance metrics',
            'Custom reporting'
          ]
        },
        {
          title: 'AI-Powered Quality Control',
          description: 'Ensure print quality with AI-powered monitoring and failure detection.',
          image: '@/assets/ai-quality.jpg',
          color: 'info',
          subFeatures: [
            'Real-time failure detection',
            'Automatic print pausing',
            'Quality analysis',
            'Defect prediction'
          ]
        }
      ],
      advancedFeatures: [
        {
          category: 'Control',
          title: 'Advanced Remote Control',
          description: 'Take complete control of your printers from anywhere in the world.',
          icon: 'mdi-remote',
          color: 'primary',
          tags: ['Remote Access', 'Security', 'Multi-User']
        },
        {
          category: 'AI',
          title: 'Machine Learning Integration',
          description: 'Leverage AI for predictive maintenance and quality optimization.',
          icon: 'mdi-brain',
          color: 'secondary',
          tags: ['Predictive Maintenance', 'Quality Optimization', 'Machine Learning']
        },
        {
          category: 'Analytics',
          title: 'Business Intelligence',
          description: 'Comprehensive analytics and reporting for data-driven decision making.',
          icon: 'mdi-chart-box',
          color: 'info',
          tags: ['Reports', 'Dashboards', 'Insights']
        },
        {
          category: 'Integration',
          title: 'Ecosystem Integration',
          description: 'Seamless integration with popular slicing software and workflow tools.',
          icon: 'mdi-connection',
          color: 'success',
          tags: ['API', 'Plugins', 'Workflow']
        }
      ],
      integrationPartners: [
        {
          name: 'Cura',
          logo: '@/assets/partners/cura-logo.png'
        },
        {
          name: 'PrusaSlicer',
          logo: '@/assets/partners/prusa-logo.png'
        },
        {
          name: 'OctoPrint',
          logo: '@/assets/partners/octoprint-logo.png'
        },
        {
          name: 'Simplify3D',
          logo: '@/assets/partners/simplify3d-logo.png'
        }
      ],
      statistics: [
        {
          value: '99.9%',
          label: 'Uptime',
          subtext: 'Reliable operation',
          color: 'text-primary'
        },
        {
          value: '50%',
          label: 'Cost Reduction',
          subtext: 'Average savings reported',
          color: 'text-secondary'
        },
        {
          value: '2x',
          label: 'Productivity',
          subtext: 'Efficiency increase',
          color: 'text-info'
        },
        {
          value: '24/7',
          label: 'Monitoring',
          subtext: 'Continuous operation',
          color: 'text-success'
        }
      ],
      comparisons: [
        {
          feature: 'Remote Control',
          printerhive: true,
          others: true
        },
        {
          feature: 'AI-Powered Monitoring',
          printerhive: true,
          others: false
        },
        {
          feature: 'Unlimited Printers',
          printerhive: true,
          others: false
        },
        {
          feature: 'Open Source',
          printerhive: true,
          others: false
        },
        {
          feature: 'Free Forever',
          printerhive: true,
          others: false
        },
        {
          feature: 'Community Support',
          printerhive: true,
          others: true
        },
        {
          feature: 'Custom Integrations',
          printerhive: true,
          others: false
        }
      ]
    };
  },

  methods: {
    
  }
});
</script>
