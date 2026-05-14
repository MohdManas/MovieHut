import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Card, Divider } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

export const Legal = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: "corporate",
      title: "Corporate & Commercial Advisory",
      icon: "briefcase",
      content: `Our firm offers sophisticated legal advisory services across the spectrum of Corporate and Commercial Law within the United Arab Emirates. We provide strategic guidance to a diverse clientele, ranging from emerging enterprises to established multinational corporations, enabling them to adeptly navigate the intricate regulatory landscape of the UAE.

Our core competencies include:
• Company formation and structuring
• Drafting and review of complex commercial contracts
• Joint Ventures (JVs) and Mergers & Acquisitions (M&A)
• Shareholder agreements and corporate governance
• Compliance with UAE Commercial Companies Law (Federal Decree-Law No. 32 of 2021)

Our objective is to empower businesses to flourish within the highly competitive UAE market through astute legal strategies and meticulous documentation.`,
      highlights: [
        "Joint venture and shareholder agreement drafting",
        "Mergers & acquisitions advisory and due diligence",
        "Corporate governance and compliance",
        "Commercial contract negotiation",
      ],
    },
    {
      id: "dispute",
      title: "Dispute Resolution & Arbitration",
      icon: "gavel",
      content: `In the dynamic commercial environment of the UAE, disputes may arise. Our specialized Dispute Resolution team provides assertive and strategic representation in both UAE Federal and Local Courts and prominent arbitration forums.

Our expertise covers:
• Dubai International Arbitration Centre (DIAC)
• Abu Dhabi Global Market (ADGM) Arbitration Centre
• DIFC-LCIA Arbitration Centre
• Complex, high-value, multi-jurisdictional disputes
• Litigation, mediation, and international arbitration
• UAE Federal Law No. 6 of 2018 on Arbitration

We focus on understanding our clients' commercial objectives to achieve optimal outcomes with precision and efficacy.`,
      highlights: [
        "Strategic representation in UAE courts",
        "International arbitration expertise",
        "Complex dispute management",
        "Litigation and mediation services",
      ],
    },
    {
      id: "finance",
      title: "Finance & Banking Regulatory Compliance",
      icon: "bank",
      content: `Our Finance & Banking practice delivers highly specialized legal services to financial institutions, corporate entities, and private clients operating within the sophisticated financial ecosystem of the UAE.

We provide expert guidance on:
• Corporate finance and project finance
• Asset-backed lending and syndicated credit facilities
• Regulatory compliance with Central Bank of the UAE
• Dubai Financial Services Authority (DFSA) regulations
• Banking disputes and financial disagreements
• DIFC financial regulations and compliance

Our commitment is to ensure that clients' financial operations are conducted in strict adherence to UAE financial legislation, thereby mitigating regulatory risks and fostering sustainable growth.`,
      highlights: [
        "Financial transaction advisory",
        "Regulatory compliance support",
        "Banking dispute resolution",
        "DFSA and Central Bank compliance",
      ],
    },
    {
      id: "retainer",
      title: "Retainer Legal Services",
      icon: "shield-check",
      content: `Recognizing the imperative for continuous and proactive legal support in today's rapidly evolving business landscape, we offer bespoke Retainer Legal Services designed to provide ongoing legal assistance for daily operational requirements and strategic risk mitigation.

Our retainer services include:
• Immediate and accessible legal advice
• Operational compliance support
• Contractual obligation management
• Timely counsel on critical operational matters
• Customized packages aligned with unique requirements
• Cost-effective solution for consistent legal support

By seamlessly integrating our specialized legal expertise into your routine workflow, clients can significantly minimize potential legal exposures and ensure unwavering adherence to regulatory mandates.`,
      highlights: [
        "Responsive transaction support",
        "Commercially focused legal strategy",
        "Experienced cross-border advice",
        "Trusted long-term advisory partnership",
      ],
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Legal Services</Text>
        <Text style={styles.headerSubtitle}>
          Professional Legal Advisory in the UAE
        </Text>
      </View>

      <View style={styles.introSection}>
        <Card style={styles.introCard}>
          <View style={styles.cardContent}>
            <Text style={styles.introTitle}>Our Expertise</Text>
            <Text style={styles.introText}>
              We provide comprehensive legal solutions tailored to meet the
              complex needs of businesses operating in the United Arab Emirates.
              Our multidisciplinary team combines deep UAE legal expertise with
              practical commercial insight.
            </Text>
          </View>
        </Card>
      </View>

      <View style={styles.sectionsContainer}>
        {sections.map((section) => (
          <View key={section.id} style={styles.sectionWrapper}>
            <TouchableOpacity
              style={styles.sectionHeader}
              onPress={() => toggleSection(section.id)}
              activeOpacity={0.7}
            >
              <View style={styles.sectionTitleContainer}>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name={section.icon}
                    size={24}
                    color="#D4AF37"
                  />
                </View>
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
              <MaterialCommunityIcons
                name={
                  expandedSection === section.id
                    ? "chevron-up"
                    : "chevron-down"
                }
                size={24}
                color="#D4AF37"
              />
            </TouchableOpacity>

            {expandedSection === section.id && (
              <View style={styles.sectionContent}>
                <Text style={styles.contentText}>{section.content}</Text>

                <Divider style={styles.divider} />

                <Text style={styles.highlightsTitle}>Key Services:</Text>
                {section.highlights.map((highlight, index) => (
                  <View key={index} style={styles.highlightItem}>
                    <View style={styles.bulletPoint} />
                    <Text style={styles.highlightText}>{highlight}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      <View style={styles.ctaSection}>
        <Card style={styles.ctaCard}>
          <View style={styles.cardContent}>
            <Text style={styles.ctaTitle}>Ready to Discuss Your Legal Needs?</Text>
            <Text style={styles.ctaText}>
              Contact our team for tailored advice on your corporate or
              commercial matter.
            </Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Contact Us</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>

      <View style={styles.footerSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E27",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1E2749",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 8,
    fontFamily: "Oswald_400Regular",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#A0A9C9",
    fontFamily: "Lato_400Regular",
  },
  introSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  introCard: {
    backgroundColor: "#1E2749",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#2A3354",
    elevation: 0,
  },
  cardContent: {
    padding: 20,
  },
  introTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#D4AF37",
    marginBottom: 12,
    fontFamily: "Oswald_400Regular",
  },
  introText: {
    fontSize: 14,
    color: "#C5CEE0",
    lineHeight: 22,
    fontFamily: "Lato_400Regular",
  },
  sectionsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionWrapper: {
    marginBottom: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#1E2749",
    borderWidth: 1,
    borderColor: "#2A3354",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#1E2749",
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#2A3354",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    flex: 1,
    fontFamily: "Oswald_400Regular",
  },
  sectionContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#0A0E27",
    borderTopWidth: 1,
    borderTopColor: "#2A3354",
  },
  contentText: {
    fontSize: 13,
    color: "#C5CEE0",
    lineHeight: 20,
    marginBottom: 16,
    fontFamily: "Lato_400Regular",
  },
  divider: {
    marginVertical: 16,
    backgroundColor: "#2A3354",
  },
  highlightsTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#D4AF37",
    marginBottom: 12,
    fontFamily: "Oswald_400Regular",
  },
  highlightItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#D4AF37",
    marginTop: 7,
    marginRight: 12,
    flexShrink: 0,
  },
  highlightText: {
    fontSize: 13,
    color: "#C5CEE0",
    lineHeight: 18,
    flex: 1,
    fontFamily: "Lato_400Regular",
  },
  ctaSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  ctaCard: {
    backgroundColor: "#1E3A5F",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#2A5A8F",
    elevation: 0,
  },
  ctaTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 12,
    fontFamily: "Oswald_400Regular",
  },
  ctaText: {
    fontSize: 14,
    color: "#B8C5D6",
    lineHeight: 22,
    marginBottom: 16,
    fontFamily: "Lato_400Regular",
  },
  ctaButton: {
    backgroundColor: "#D4AF37",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  ctaButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E3A5F",
    fontFamily: "Oswald_400Regular",
  },
  footerSpacing: {
    height: 20,
  },
});
