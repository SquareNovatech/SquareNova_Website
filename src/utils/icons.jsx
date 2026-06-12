import {
  Smartphone,
  Brain,
  Globe,
  Cloud,
  FlaskConical,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Microscope,
  Rocket,
  Building2,
  Award,
  Lightbulb,
  Shield,
  TrendingUp,
  BookOpen,
} from 'lucide-react';

const iconMap = {
  Smartphone,
  Brain,
  Globe,
  Cloud,
  FlaskConical,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Microscope,
  Rocket,
  Building2,
  Award,
  Lightbulb,
  Shield,
  TrendingUp,
  BookOpen,
};

export function getIcon(name, props = {}) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
