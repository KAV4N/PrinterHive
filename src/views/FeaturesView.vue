// views/FeaturesView.vue
<template>
  <v-container>
    <features-hero-section />

    <!-- Value Proposition Section -->
    <v-row class="mb-16">
      <v-col cols="12" class="text-center">
        <h2 class="text-h3 font-weight-bold mb-8">Why Choose PrinterHive?</h2>
        <v-row>
          <v-col v-for="(value, index) in valuePropositions" :key="index" cols="12" md="4">
            <features-value-proposition-card :value="value" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Main Features Grid -->
    <v-row class="mb-16">
      <v-col cols="12">
        <h2 class="text-h3 font-weight-bold text-center mb-8">Core Features</h2>
        <v-row>
          <v-col v-for="(feature, index) in mainFeatures" :key="index" cols="12" md="4">
            <features-card :feature="feature" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Advanced Features Timeline -->
    <v-row class="mb-16">
      <v-col cols="12">
        <h2 class="text-h3 font-weight-bold text-center mb-8">Advanced Capabilities</h2>
        <features-advanced-timeline :features="advancedFeatures" />
      </v-col>
    </v-row>

    <!-- Statistics Section -->
    <v-row class="mb-16">
      <v-col cols="12">
        <features-statistics-card :stats="statistics" />
      </v-col>
    </v-row>

    <!-- Integration Partners -->
    <v-row class="mb-16">
      <v-col cols="12">
        <h2 class="text-h3 font-weight-bold text-center mb-8">Integration Partners</h2>
        <v-slide-group show-arrows>
          <v-slide-group-item v-for="(partner, index) in integrationPartners" :key="index">
            <v-card class="ma-4" width="200" height="150" variant="outlined">
              <v-img :src="partner.logo" height="100" contain class="pa-4"></v-img>
              <v-card-text class="text-center pt-0">
                {{ partner.name }}
              </v-card-text>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
    </v-row>

    <!-- Comparison Table -->
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

    <!-- Call to Action -->
    <v-row class="mb-16">
      <v-col cols="12" class="text-center">
        <v-card class="pa-8 bg-primary">
          <h2 class="text-h3 font-weight-bold mb-4">
            Ready to Transform Your 3D Printing Workflow?
          </h2>
          <p class="text-h6 mb-8">
            Join thousands of satisfied users who have revolutionized their 3D printing management
          </p>
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
              <v-btn block size="x-large" variant="outlined" to="/demo">
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
import { defineComponent } from 'vue'
import FeaturesHeroSection from '@/components/FeaturesHeroSection.vue'
import FeaturesValuePropositionCard from '@/components/FeaturesValuePropositionCard.vue'
import FeaturesCard from '@/components/FeaturesCard.vue'
import FeaturesAdvancedTimeline from '@/components/FeaturesAdvancedTimeline.vue'
import FeaturesStatisticsCard from '@/components/FeaturesStatisticsCard.vue'

export default defineComponent({
  name: 'FeaturesView',
  components: {
    FeaturesHeroSection,
    FeaturesValuePropositionCard,
    FeaturesCard,
    FeaturesAdvancedTimeline,
    FeaturesStatisticsCard,
  },
  data() {
    return {
      valuePropositions: [
        {
          title: 'Enterprise Features',
          description:
            'Get enterprise-grade features completely free, including advanced monitoring, analytics, and remote control capabilities.',
          icon: 'mdi-star',
          color: 'primary',
        },
        {
          title: 'Open Source',
          description:
            'Built on open-source principles, ensuring transparency, community-driven development, and unlimited customization potential.',
          icon: 'mdi-open-source-initiative',
          color: 'secondary',
        },
        {
          title: 'Community Powered',
          description:
            'Join a thriving community of 3D printing enthusiasts and professionals sharing knowledge and resources.',
          icon: 'mdi-account-group',
          color: 'info',
        },
      ],
      mainFeatures: [
        {
          title: 'Intelligent Fleet Management',
          description:
            'Manage your entire printer fleet from a single dashboard with smart automation and scheduling.',
          image: '../public/img/features/fleet-management.jpg',
          color: 'primary',
          subFeatures: [
            'Smart queue management',
            'Automated job distribution',
            'Printer health monitoring',
            'Real-time status updates',
          ],
        },
        {
          title: 'Advanced Analytics Suite',
          description:
            'Make data-driven decisions with comprehensive analytics and reporting tools.',
          image: '../public/img/features/analytics.jpg',
          color: 'secondary',
          subFeatures: [
            'Success rate tracking',
            'Cost analysis',
            'Performance metrics',
            'Custom reporting',
          ],
        },
        {
          title: 'AI-Powered Quality Control',
          description: 'Ensure print quality with AI-powered monitoring and failure detection.',
          image: '../public/img/features/ai-quality.jpg',
          color: 'info',
          subFeatures: [
            'Real-time failure detection',
            'Automatic print pausing',
            'Quality analysis',
            'Defect prediction',
          ],
        },
      ],
      advancedFeatures: [
        {
          category: 'Control',
          title: 'Advanced Remote Control',
          description: 'Take complete control of your printers from anywhere in the world.',
          icon: 'mdi-remote',
          color: 'primary',
          tags: ['Remote Access', 'Security', 'Multi-User'],
        },
        {
          category: 'AI',
          title: 'Machine Learning Integration',
          description: 'Leverage AI for predictive maintenance and quality optimization.',
          icon: 'mdi-brain',
          color: 'secondary',
          tags: ['Predictive Maintenance', 'Quality Optimization', 'Machine Learning'],
        },
        {
          category: 'Analytics',
          title: 'Business Intelligence',
          description: 'Comprehensive analytics and reporting for data-driven decision making.',
          icon: 'mdi-chart-box',
          color: 'info',
          tags: ['Reports', 'Dashboards', 'Insights'],
        },
        {
          category: 'Integration',
          title: 'Ecosystem Integration',
          description: 'Seamless integration with popular slicing software and workflow tools.',
          icon: 'mdi-connection',
          color: 'success',
          tags: ['API', 'Plugins', 'Workflow'],
        },
      ],
      integrationPartners: [
        {
          name: 'Cura',
          logo: '../public/img/features/cura.png',
        },
        {
          name: 'PrusaSlicer',
          logo: '../public/img/features/prusaslicer.jpg',
        },
        {
          name: 'OctoPrint',
          logo: '../public/img/features/octoprint.jpg',
        },
        {
          name: 'Simplify3D',
          logo: '../public/img/features/simplify.jpg',
        },
      ],
      statistics: [
        {
          value: '99.9%',
          label: 'Uptime',
          subtext: 'Reliable operation',
          color: 'text-primary',
        },
        {
          value: '50%',
          label: 'Cost Reduction',
          subtext: 'Average savings reported',
          color: 'text-secondary',
        },
        {
          value: '2x',
          label: 'Productivity',
          subtext: 'Efficiency increase',
          color: 'text-info',
        },
        {
          value: '24/7',
          label: 'Monitoring',
          subtext: 'Continuous operation',
          color: 'text-success',
        },
      ],
      comparisons: [
        {
          feature: 'Remote Control',
          printerhive: true,
          others: true,
        },
        {
          feature: 'AI-Powered Monitoring',
          printerhive: true,
          others: false,
        },
        {
          feature: 'Unlimited Printers',
          printerhive: true,
          others: false,
        },
        {
          feature: 'Open Source',
          printerhive: true,
          others: false,
        },
        {
          feature: 'Free Forever',
          printerhive: true,
          others: false,
        },
        {
          feature: 'Community Support',
          printerhive: true,
          others: true,
        },
        {
          feature: 'Custom Integrations',
          printerhive: true,
          others: false,
        },
      ],
    }
  },
})
</script>
