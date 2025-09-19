import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

interface BloodRequest {
  id: string;
  bloodType: string;
  priority: 'Critical' | 'Urgent' | 'Moderate';
  units: number;
  purpose: string;
  department: string;
  timeAgo: string;
  donorsAvailable: number;
}

const bloodRequests: BloodRequest[] = [
  {
    id: '1',
    bloodType: 'O-',
    priority: 'Critical',
    units: 2,
    purpose: 'Emergency Surgery',
    department: 'Emergency',
    timeAgo: '30 mins ago',
    donorsAvailable: 5,
  },
  {
    id: '2',
    bloodType: 'A+',
    priority: 'Urgent',
    units: 1,
    purpose: 'Cancer Treatment',
    department: 'Oncology',
    timeAgo: '2 hours ago',
    donorsAvailable: 12,
  },
  {
    id: '3',
    bloodType: 'B+',
    priority: 'Moderate',
    units: 3,
    purpose: 'Scheduled Surgery',
    department: 'Surgery',
    timeAgo: '4 hours ago',
    donorsAvailable: 8,
  },
];

export default function BloodBankManager() {
  const [activeTab, setActiveTab] = useState('Requests');

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return '#FEE2E2';
      case 'Urgent':
        return '#FEF3C7';
      case 'Moderate':
        return '#FEF3C7';
      default:
        return '#F3F4F6';
    }
  };

  const getPriorityTextColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return '#DC2626';
      case 'Urgent':
        return '#D97706';
      case 'Moderate':
        return '#D97706';
      default:
        return '#374151';
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <View style={styles.logoContainer}>
              <Ionicons name="medical" size={24} color="white" />
            </View>
            <View>
              <Text style={styles.hospitalName}>Raviya Hospital</Text>
              <Text style={styles.subtitle}>Blood Bank Manager</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="notifications-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="chatbubble-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="settings-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Active Requests</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Available Donors</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>89%</Text>
            <Text style={styles.statLabel}>Inventory Level</Text>
          </View>
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {['Requests', 'Inventory', 'Donors'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Blood Requests</Text>
          <TouchableOpacity style={styles.newRequestButton}>
            <Ionicons name="add" size={20} color="white" />
            <Text style={styles.newRequestText}>New Request</Text>
          </TouchableOpacity>
        </View>

        {bloodRequests.map((request) => (
          <View key={request.id} style={styles.requestCard}>
            <View style={styles.cardHeader}>
              <View style={styles.bloodTypeContainer}>
                <Text style={styles.bloodType}>{request.bloodType}</Text>
                <View
                  style={[
                    styles.priorityBadge,
                    { backgroundColor: getPriorityColor(request.priority) },
                  ]}
                >
                  <Text
                    style={[
                      styles.priorityText,
                      { color: getPriorityTextColor(request.priority) },
                    ]}
                  >
                    {request.priority}
                  </Text>
                </View>
                <Text style={styles.unitsText}>{request.units} units</Text>
              </View>
              <Text style={styles.donorsAvailable}>
                {request.donorsAvailable} donors available
              </Text>
            </View>

            <Text style={styles.purposeText}>{request.purpose}</Text>
            <Text style={styles.departmentText}>
              {request.department} • {request.timeAgo}
            </Text>

            <View style={styles.cardActions}>
              <TouchableOpacity style={styles.findDonorsButton}>
                <Text style={styles.findDonorsText}>Find Donors</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewDetailsButton}>
                <Text style={styles.viewDetailsText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#DC2626',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  headerRight: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 10,
    padding: 3,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 7,
  },
  activeTab: {
    backgroundColor: '#F3F4F6',
  },
  tabText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#111827',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  newRequestButton: {
    backgroundColor: '#DC2626',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  newRequestText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 3,
  },
  requestCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#DC2626',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2.84,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bloodTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bloodType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginRight: 10,
  },
  priorityBadge: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 10,
    marginRight: 10,
  },
  priorityText: {
    fontSize: 11,
    fontWeight: '600',
  },
  unitsText: {
    fontSize: 12,
    color: '#6B7280',
  },
  donorsAvailable: {
    fontSize: 12,
    color: '#DC2626',
    fontWeight: '600',
  },
  purposeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 3,
  },
  departmentText: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 12,
  },
  cardActions: {
    flexDirection: 'row',
    gap: 10,
  },
  findDonorsButton: {
    backgroundColor: '#DC2626',
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  findDonorsText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  viewDetailsButton: {
    backgroundColor: 'transparent',
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  viewDetailsText: {
    color: '#374151',
    fontWeight: '600',
    fontSize: 12,
  },
});