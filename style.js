import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  welcome: {
    textAlign: "center",
  },

  shadowProp: {
    /* Apply to add a shadow to an object */
    shadowColor: "#141414",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  card: {
    /* green bubble for menus */
    backgroundColor: "#7AB9A1",
    borderRadius: 8,
    padding: 20,
    width: "100%",
    marginVertical: 10,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 30,
    opacity: 70,
    display: "flex",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 30,
    fontFamily: "Montserrat Alternates",
    fontWeight: "bold",
    /*font-family: 'Courgette', cursive,*/
    color: "white",
    position: "absolute",
    borderRadius: 30,
    backgroundColor: "#126760",
    opacity: 70,
  },

  cardItem: {
    backgroundColor: "#E3FFEB",
    width: 400,
    borderRadius: 30,
    height: 20,
    padding: 20,
    fontSize: 24,
    color: "#126760",
    fontFamily: "Montserrat Alternates",
    fontWeight: "bold",
  },

  button: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    height: 220,
    width: 500,
    alignItems: "center",
    paddingTop: 70,
  },

  cardObjectLeft: {
    /*checkbox bubble, time, reset, ect */
    paddingRight: 50,
  },

  scrollDown: {
    height: 30,
    width: 50,
    alignContent: "center",
    paddingTop: 10,
    paddingRight: 15,
  },

  addButton: {
    height: 50,
    width: 50,
    position: "absolute",
    left: 430,
  },
});
