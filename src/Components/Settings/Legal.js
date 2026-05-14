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
      whatWeDo: `Our firm offers sophisticated legal advisory services across the spectrum of Corporate and Commercial Law within the United Arab Emirates. We provide strategic guidance to a diverse clientele, ranging from emerging enterprises to established multinational corporations, enabling them to adeptly navigate the intricate regulatory landscape of the UAE. Our core competencies include comprehensive support for company formation, ensuring meticulous adherence to local statutes and the distinct regulations governing various free zones across the Emirates. We excel in the drafting, negotiation, and review of complex commercial contracts, encompassing distribution agreements, agency arrangements, franchise and licensing accords. These instruments are meticulously crafted to safeguard our clients' commercial interests and foster seamless operational execution. Furthermore, we provide expert counsel on Joint Ventures (JVs), Mergers & Acquisitions (M&A), and the formulation of robust shareholder agreements, thereby establishing resilient legal frameworks for strategic alliances and significant corporate transactions. Our overarching objective is to empower businesses to flourish within the highly competitive UAE market through the application of astute legal strategies and rigorous documentation, aligning with the provisions of the UAE Commercial Companies Law (Federal Decree-Law No. 32 of 2021).`,
      whyChooseUs: `We combine practical commercial insight with deep UAE legal experience to deliver solutions that protect your business and accelerate growth. Our team offers responsive transaction support, commercially focused legal strategy, experienced cross-border advice, and acts as a trusted long-term advisory partner.`,
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
      whatWeDo: `In the dynamic and often challenging commercial environment of the UAE, the emergence of disputes is an inherent risk. Our specialized Dispute Resolution team provides assertive and strategic representation in both the UAE Federal and Local Courts and prominent arbitration forums, including the Dubai International Arbitration Centre (DIAC), Abu Dhabi Global Market (ADGM) Arbitration Centre, and the DIFC-LCIA Arbitration Centre. We possess extensive experience in managing complex, high-value, and multi-jurisdictional disputes across a broad array of contentious matters. Our methodology is rooted in a profound understanding of our clients' commercial objectives, aiming to secure optimal outcomes through litigation, mediation, or international arbitration. We offer incisive advice on the procedural and substantive legal considerations pertinent to dispute resolution, including the application of governing laws as determined by tribunals and courts, such as the DIFC Courts. Our profound expertise in international arbitration is underpinned by a thorough command of the UAE Federal Law No. 6 of 2018 on Arbitration, ensuring comprehensive and effective advocacy for our clients in resolving their commercial conflicts with precision and efficacy.`,
      whyChooseUs: `Our dispute resolution team is renowned for its strategic approach and deep understanding of UAE and international dispute mechanisms. We provide robust advocacy, tailored strategies, and a commitment to achieving the most favorable outcomes for our clients, minimizing disruption to their business operations.`,
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
      whatWeDo: `Our Finance & Banking practice delivers highly specialized legal services to financial institutions, corporate entities, and private clients operating within the sophisticated financial ecosystem of the UAE. We offer expert guidance on an extensive range of financial transactions, including but not limited to corporate finance, project finance, asset-backed lending, and syndicated credit facilities. A cornerstone of our service offering is comprehensive advice on regulatory compliance, assisting clients in navigating the intricate framework of financial laws and regulations promulgated by key authorities such as the Central Bank of the UAE and the Dubai Financial Services Authority (DFSA) within the Dubai International Financial Centre (DIFC). We also provide robust representation in banking disputes, offering strategic counsel and vigorous advocacy to resolve complex financial disagreements. Our commitment is to ensure that our clients' financial operations are conducted in strict adherence to UAE financial legislation, thereby mitigating regulatory risks and fostering sustainable economic growth.`,
      whyChooseUs: `We offer unparalleled expertise in UAE financial regulations, providing proactive compliance solutions and strategic advice on complex financial transactions. Our team ensures that your financial endeavors are legally sound, secure, and aligned with the highest standards of governance.`,
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
      whatWeDo: `Recognizing the imperative for continuous and proactive legal support in today's rapidly evolving business landscape, we offer bespoke Retainer Legal Services. These services are meticulously designed to provide ongoing legal assistance for daily operational requirements and strategic risk mitigation. Our retainer clients benefit from immediate and accessible legal advice, enabling them to address emergent legal queries and challenges without the necessity of initiating separate engagements. This service model is ideally suited for businesses committed to maintaining stringent legal compliance, effectively managing their diverse contractual obligations, and receiving timely, expert counsel on critical operational matters. By seamlessly integrating our specialized legal expertise into their routine workflow, clients can significantly minimize potential legal exposures, ensure unwavering adherence to regulatory mandates, and concentrate on their core business objectives with enhanced confidence and security. Our retainer packages are meticulously customized to align with the unique requirements and budgetary considerations of each client, offering a highly cost-effective solution for consistent and premium legal support.`,
      whyChooseUs: `Our retainer services provide a cost-effective and efficient way to access ongoing legal support. We act as an extension of your team, offering proactive advice, mitigating risks, and ensuring continuous compliance, allowing you to focus on your core business with peace of mind.`,
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
                <Text style={styles.subHeading}>What We Do</Text>
                <Text style={styles.contentText}>{section.whatWeDo}</Text>

                <Divider style={styles.divider} />

                <Text style={styles.subHeading}>Why Choose Us</Text>
                <Text style={styles.contentText}>{section.whyChooseUs}</Text>

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
  subHeading: {
    fontSize: 16,
    fontWeight: "700",
    color: "#D4AF37",
    marginBottom: 8,
    fontFamily: "Oswald_400Regular",
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
