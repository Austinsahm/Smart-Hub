import {
  DotFilledIcon,
  DotIcon,
  RocketIcon,
  BackpackIcon,
  DrawingPinIcon,
} from "@radix-ui/react-icons";

import { FaFemale, FaMale } from "react-icons/fa";

export const labels = [
  {
    value: "head_boy",
    label: "Head Boy",
  },
  {
    value: "head_girl",
    label: "Head Girl",
  },
  {
    value: "deputy_head_boy",
    label: "Deputy Head Boy",
  },
  {
    value: "deputy_head_girl",
    label: "Deputy Head Girl",
  },
  {
    value: "sports_prefect",
    label: "Sports Prefect",
  },
  {
    value: "library_prefect",
    label: "Library Prefect",
  },
  {
    value: "laboratory_prefect",
    label: "Laboratory Prefect",
  },
  {
    value: "health_prefect",
    label: "Health Prefect",
  },
  {
    value: "social_prefect",
    label: "Social Prefect",
  },
  {
    value: "discipline_prefect",
    label: "Discipline Prefect",
  },
  {
    value: "house_prefect",
    label: "House Prefect",
  },
  {
    value: "environmental_prefect",
    label: "Environmental Prefect",
  },
  {
    value: "chapel_prefect",
    label: "Chapel Prefect",
  },
  {
    value: "cultural_prefect",
    label: "Cultural Prefect",
  },
  {
    value: "assistant_head_prefect",
    label: "Assistant Head Prefect",
  },
  {
    value: "class_prefect",
    label: "Class Prefect",
  },
];

export const statuses = [
  {
    value: "active",
    label: "Active",
    icon: DotFilledIcon,
  },
  {
    value: "inactive",
    label: "Inactive",
    icon: DotIcon,
  },
  {
    value: "graduated",
    label: "Graduated",
    icon: RocketIcon,
  },
];

export const gender = [
  {
    label: "M",
    value: "M",
    icon: FaMale,
  },
  {
    label: "F",
    value: "F",
    icon: FaFemale,
  },
];

export const classes = [
  // Kindergarten
  {
    label: "Kindergarten 1",
    value: "kindergarten_1",
    icon: BackpackIcon,
  },
  {
    label: "Kindergarten 2",
    value: "kindergarten_2",
    icon: BackpackIcon,
  },
  {
    label: "Kindergarten 3",
    value: "kindergarten_3",
    icon: BackpackIcon,
  },
  // Primary
  {
    label: "Primary 1",
    value: "primary_1",
    icon: DrawingPinIcon,
  },
  {
    label: "Primary 2",
    value: "primary_2",
    icon: DrawingPinIcon,
  },
  {
    label: "Primary 3",
    value: "primary_3",
    icon: DrawingPinIcon,
  },
  {
    label: "Primary 4",
    value: "primary_4",
    icon: DrawingPinIcon,
  },
  {
    label: "Primary 5",
    value: "primary_5",
    icon: DrawingPinIcon,
  },
  {
    label: "Primary 6",
    value: "primary_6",
    icon: DrawingPinIcon,
  },
  // Junior Secondary School
  {
    label: "JSS 1",
    value: "jss_1",
    icon: DrawingPinIcon,
  },
  {
    label: "JSS 2",
    value: "jss_2",
    icon: DrawingPinIcon,
  },
  {
    label: "JSS 3",
    value: "jss_3",
    icon: DrawingPinIcon,
  },
  // Senior Secondary School
  {
    label: "SSS 1",
    value: "sss_1",
    icon: DrawingPinIcon,
  },
  {
    label: "SSS 2",
    value: "sss_2",
    icon: DrawingPinIcon,
  },
  {
    label: "SSS 3",
    value: "sss_3",
    icon: DrawingPinIcon,
  },
];
