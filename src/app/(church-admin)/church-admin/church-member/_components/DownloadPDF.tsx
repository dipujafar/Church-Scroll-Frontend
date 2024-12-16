import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  headerText: {
    marginBottom: 4,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginBottom: 10,
  },
  gridItem: {
    width: "calc(12.5% - 5px)",
    marginBottom: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
  },
});

const DownloadPDF = ({ data }: { data: string[] }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text>Generated Codes for Church Members</Text>
        </View>
        <View style={styles.gridContainer}>
          {data?.map((code, index) => (
            <View key={index} style={styles.gridItem}>
              <Text style={styles.text}>{code}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default DownloadPDF;
