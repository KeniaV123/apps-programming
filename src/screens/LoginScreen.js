import * as React from "react";
import * as RN from "react-native";
import { database } from "../../config/fb";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Añadir() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RN.Button
          title="Registrar"
          onPress={() => navigation.navigate("Register")}
        />
      ),
    });
  }, [navigation]);

  const [usuarios, setUsuarios] = React.useState({
    email: "",
    password: "",
    createdAt: new Date(),
  });

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        usuarios.email,
        usuarios.password
      );
      const user = userCredential.user;
      console.log("user", user);
      navigation.navigate("KeniaBoutique");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error", errorCode, errorMessage);
    }
  };

  return (
    <RN.View style={styles.container}>
      <RN.Text style={styles.title}>Iniciar Sesión</RN.Text>
      <RN.TextInput
        onChangeText={(text) => setUsuarios({ ...usuarios, email: text })}
        style={styles.inputContainer}
        placeholder="Correo electrónico"
      />
      <RN.TextInput
        onChangeText={(text) => setUsuarios({ ...usuarios, password: text })}
        style={styles.inputContainer}
        placeholder="Contraseña"
      />
      <RN.Button title="Iniciar Sesión" onPress={handleLogin} />
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
  inputContainer: {
    width: "90%",
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#ddd",
    borderRadius: 6,
  },
  emoji: {
    fontSize: 100,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    marginVertical: 6,
  },
});
