import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    menuItems:{
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    menuRow:{
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 15,
        marginTop: 15,
    },
    icon:{
        color: "white"
    },
    menuText:{
        color: "white",
        marginLeft: 15,
        fontSize: 16,
        fontWeight: "bold"
    },
    menuTextBox: {
        flexGrow: 1

    },
    arrowIcon: {
        color: "#4D4D4E"
    },
    menuSubtitle: {
        color: "grey",
        marginLeft: 15,
        fontSize: 14
    }
})

export default styles