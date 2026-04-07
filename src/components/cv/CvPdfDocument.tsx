import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { cvData } from "../../data/cVData";

const styles = StyleSheet.create({
  page: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 45,
    fontSize: 12,
    fontFamily: "Times-Roman",
    color: "#000000",
    lineHeight: 1.6,
    backgroundColor: "#ffffff",
  },

  title: {
    fontSize: 16,
    fontFamily: "Times-Bold",
    textAlign: "center",
    marginBottom: 12,
    textTransform: "uppercase",
  },

  name: {
    fontSize: 14,
    fontFamily: "Times-Bold",
    textAlign: "center",
    marginBottom: 4,
  },

  role: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 6,
  },

  contact: {
    fontSize: 11,
    textAlign: "center",
    marginBottom: 20,
  },

  section: {
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 12,
    fontFamily: "Times-Bold",
    marginBottom: 6,
    textTransform: "uppercase",
  },

  text: {
    fontSize: 12,
    marginBottom: 4,
    textAlign: "justify",
  },

  label: {
    fontFamily: "Times-Bold",
  },

  bullet: {
    fontSize: 12,
    marginBottom: 4,
    marginLeft: 12,
  },

  block: {
    marginBottom: 8,
  },

  subTitle: {
    fontSize: 12,
    fontFamily: "Times-Bold",
    marginBottom: 2,
  },

  smallText: {
    fontSize: 11,
    marginBottom: 2,
  },
});

const CvPdfDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Main Title */}
        <Text style={styles.title}>Curriculum Vitae</Text>

        {/* Name and Role */}
        {/* <Text style={styles.name}>{cvData.name}</Text>
        <Text style={styles.role}>{cvData.role}</Text>
        <Text style={styles.contact}>
          {cvData.email} | {cvData.phone} | {cvData.location}
        </Text> */}

        {/* Career Objective */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Career Objective</Text>
          <Text style={styles.text}>{cvData.about}</Text>
        </View>

        {/* Personal Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Name: </Text>
            {cvData.name}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Address: </Text>
            {cvData.location}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Phone: </Text>
            {cvData.phone}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Email: </Text>
            {cvData.email}
          </Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {cvData.skills.map((skill, index) => (
            <Text key={index} style={styles.bullet}>
              • {skill}
            </Text>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {cvData.education.map((edu, index) => (
            <View key={index} style={styles.block}>
              <Text style={styles.subTitle}>{edu.degree}</Text>
              <Text style={styles.smallText}>
                {edu.institution} | {edu.year}
              </Text>
            </View>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {cvData.experience.map((exp, index) => (
            <View key={index} style={styles.block}>
              <Text style={styles.subTitle}>{exp.title}</Text>
              <Text style={styles.smallText}>
                {exp.company} | {exp.year}
              </Text>
              <Text style={styles.text}>{exp.description}</Text>
            </View>
          ))}
        </View>

        {/* Projects */}
        {cvData.projects && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {cvData.projects.map((project, index) => (
              <Text key={index} style={styles.bullet}>
                • {project.title}
              </Text>
            ))}
          </View>
        )}

        {/* Languages */}
        {cvData.languages && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            {cvData.languages.map((language, index) => (
              <Text key={index} style={styles.bullet}>
                • {language}
              </Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default CvPdfDocument;