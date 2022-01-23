import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    carContainer : {
        width: "100%",
        height: "100%",
        backgroundColor: "orange"
    },

header : {
    marginTop:50,
    marginLeft : 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10


},
headerTitle : {
    color: "white",
    fontSize:16,
    fontWeight : "bold",
    justifyContent: "center",
    alignItems: "center"
},

icon : {
    color: "white"
},

backgroundImage : {
    width: "100%",
    height: "100%",
    position: "absolute"
},
batterySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5

},
batteryImage:{
    height: 26,
    width: 70,
    marginRight: 5
},
batteryText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white"

},
status:{
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 175
},

statusText:{
    fontWeight: "bold",
    color: "white"
}, 
controls:{
    flexDirection: "row",
    justifyContent: "center"
},
controlButton: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 15,
    marginLeft: 25
}
})

export default styles;