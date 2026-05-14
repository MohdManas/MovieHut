import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const LegalContent = () => {
  return (
    <View>
      <Text style={styles.heading1}>Legal Services in the UAE</Text>

      <Text style={styles.heading2}>Corporate & Commercial</Text>
      <Text style={styles.paragraph}>
        Our firm provides comprehensive legal counsel on a wide array of corporate and commercial matters within the United Arab Emirates. We assist businesses, from startups to multinational corporations, in navigating the complexities of the UAE's legal landscape. Our services encompass company formation, ensuring compliance with local regulations and free zone requirements, and advising on various business structures. We specialize in drafting and reviewing critical commercial contracts, including distribution, agency, franchise, and licensing agreements, tailored to protect our clients' interests and facilitate smooth business operations. Furthermore, we offer expert guidance on joint ventures (JVs), mergers and acquisitions (M&A), and shareholder agreements, ensuring robust legal frameworks for strategic partnerships and corporate transactions. Our objective is to empower businesses to thrive in the competitive UAE market through sound legal strategies and meticulous documentation.
      </Text>

      <Text style={styles.heading2}>Dispute Resolution</Text>
      <Text style={styles.paragraph}>
        In the dynamic business environment of the UAE, disputes can arise. Our dedicated dispute resolution team offers strategic representation in both UAE courts and various arbitration forums. We are adept at handling complex, high-value, and multi-jurisdictional disputes across a spectrum of contentious matters. Our approach focuses on understanding our clients' commercial objectives to achieve favorable outcomes, whether through litigation, mediation, or arbitration. We provide expert advice on the legal and procedural considerations related to dispute resolution, including the application of chosen laws in forums like the DIFC Courts. Our expertise extends to international arbitration, guided by the detailed legislative framework of the UAE Arbitration Law, ensuring comprehensive support for our clients in resolving their conflicts efficiently and effectively.
      </Text>

      <Text style={styles.heading2}>Finance & Banking</Text>
      <Text style={styles.paragraph}>
        Our finance and banking practice offers specialized legal services to financial institutions, corporations, and individuals operating within the UAE's robust financial sector. We provide expert guidance on a broad range of financial transactions, from corporate financing and project finance to asset-backed lending and syndicated loans. A critical aspect of our service involves advising on regulatory compliance, helping clients navigate the intricate web of financial laws and regulations set forth by authorities such as the Dubai Financial Services Authority (DFSA) in the DIFC. We also represent clients in banking disputes, offering strategic counsel and robust advocacy to resolve complex financial disagreements. Our aim is to ensure that our clients' financial activities are conducted in full compliance with UAE laws, mitigating risks and fostering sustainable growth.
      </Text>

      <Text style={styles.heading2}>Retainer Services</Text>
      <Text style={styles.paragraph}>
        Recognizing the need for continuous legal support in today's fast-paced business world, we offer flexible retainer services designed to provide ongoing legal assistance for day-to-day operations and proactive risk mitigation. Our retainer clients benefit from readily accessible legal advice, allowing them to address legal queries and challenges as they arise without the need for separate engagements. This service is ideal for businesses seeking to maintain legal compliance, manage contractual obligations, and receive timely counsel on operational matters. By integrating our legal expertise into their daily workflow, clients can effectively minimize legal risks, ensure adherence to regulatory requirements, and focus on their core business activities with confidence. Our retainer packages are tailored to meet the specific needs and budget of each client, offering a cost-effective solution for consistent legal support.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    marginTop: 20,
    textAlign: 'center',
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginTop: 15,
  },
  paragraph: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    lineHeight: 24,
  },
});
