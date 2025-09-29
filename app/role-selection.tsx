import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const roles = [
  {
    title: 'Blood Donor',
    description: 'I want to donate blood and help save lives',
    accent: '#DC2626',
    background: '#FEF2F2',
    icon: 'heart-outline' as const,
  },
  {
    title: 'Hospital/Clinic',
    description: 'Medical facility managing blood requests',
    accent: '#16A34A',
    background: '#ECFDF5',
    icon: 'business-outline' as const,
  },
];

export default function RoleSelectionScreen() {
  const router = useRouter();

  const goToApp = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          accessibilityLabel="Go back"
          style={styles.headerButton}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={26} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose Your Role</Text>
        <View style={styles.headerButton} />
      </View>

      <View style={styles.heroCopy}>
        <Text style={styles.heroHeading}>How will you use E-Donor?</Text>
        <Text style={styles.heroSubheading}>
          Select your role to get started with the right features for you
        </Text>
      </View>

      <View style={styles.cardStack}>
        {roles.map((role) => (
          <TouchableOpacity
            key={role.title}
            style={[styles.roleCard, { backgroundColor: role.background, borderColor: role.accent }]}
            activeOpacity={0.85}
            onPress={goToApp}
          >
            <View style={[styles.roleIcon, { borderColor: role.accent }]}>
              <Ionicons name={role.icon} size={28} color={role.accent} />
            </View>
            <View style={styles.roleTextGroup}>
              <Text style={styles.roleTitle}>{role.title}</Text>
              <Text style={styles.roleDescription}>{role.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.supportButton} activeOpacity={0.85}>
        <Ionicons name="help-circle-outline" size={20} color="#111827" />
        <Text style={styles.supportText}>Support</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingBottom: 32,
    gap: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
  },
  headerButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  heroCopy: {
    alignItems: 'center',
    paddingHorizontal: 8,
    gap: 8,
  },
  heroHeading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
  },
  heroSubheading: {
    fontSize: 16,
    lineHeight: 24,
    color: '#6B7280',
    textAlign: 'center',
  },
  cardStack: {
    gap: 16,
  },
  roleCard: {
    flexDirection: 'row',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    gap: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  roleIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  roleTextGroup: {
    flex: 1,
    gap: 6,
  },
  roleTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  roleDescription: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
  },
  supportButton: {
    marginTop: 'auto',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 24,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  supportText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
});
