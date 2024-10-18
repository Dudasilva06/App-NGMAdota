import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const AdocaoScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const handleVerMais = (pet) => {
    setSelectedPet(pet);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    setSelectedPet(null);
  };

  const petData = [
    {
      name: 'Neymar',
      image: require('../Home/assets/docil.png'),
      details: {
        peso: '3.3 kg',
        idade: '2 ano(s)',
        sexo: 'Macho',
        ong: 'CEPADIN',
        raca: 'Indefinida',
        especie: 'Felina',
        pelagem: 'Curta',
        porte: 'Médio',
        adotaPorQue: 'NGM Adota porquê sou muito dócil',
      },
    },
    {
      name: 'Opa',
      image: require('../Home/assets/visual.png'),
      details: {
        peso: '4.5 kg',
        idade: '9 mês(es)',
        sexo: 'Macho',
        ong: 'CEPADIN',
        raca: 'Indefinida',
        especie: 'Canina',
        pelagem: 'Curta',
        porte: 'Gigante',
        adotaPorQue: 'NGM Adota porquê sou deficiente visual',
      },
    },
    {
      name: 'Renata',
      image: require('../Home/assets/medrosa.png'),
      details: {
        peso: '3.3 kg',
        idade: '3 ano(s)',
        sexo: 'Fêmea',
        ong: 'CEPADIN',
        raca: 'Indefinida',
        especie: 'Canina',
        pelagem: 'Curta',
        porte: 'Médio',
        adotaPorQue: 'NGM Adota porquê sou medrosa',
      },
    },
    {
      name: 'Bruce',
      image: require('../Home/assets/medroso.png'),
      details: {
        peso: '3.3 kg',
        idade: '4 ano(s)',
        sexo: 'Macho',
        ong: 'CEPADIN',
        raca: 'Indefinida',
        especie: 'Canina',
        pelagem: 'Curta',
        porte: 'Grande',
        adotaPorQue: 'NGM Adota porquê sou medroso',
      },
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {petData.map((pet, index) => (
        <View key={index} style={styles.box}>
          <Image source={pet.image} style={styles.image} />
          <Text style={styles.nome}>{pet.name}</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleVerMais(pet)}>
            <Text style={styles.buttonText}>Ver mais</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedPet && (
              <>
                <Text style={styles.frase}>Olá, eu me chamo {selectedPet.name}</Text>
                <Image source={selectedPet.image} style={styles.image} />
                <View style={styles.informacoes}>
                  <Text>
                    <Text style={styles.boldText}>Peso: </Text>
                    <Text>{selectedPet.details.peso}</Text>
                  </Text>
                  <Text>
                    <Text style={styles.boldText}>Idade: </Text>
                    <Text>{selectedPet.details.idade}</Text>
                  </Text>
                  <Text>
                    <Text style={styles.boldText}>Sexo: </Text>
                    <Text>{selectedPet.details.sexo}</Text>
                  </Text>
                  <Text>
                    <Text style={styles.boldText}>Ong Protetora: </Text>
                    <Text>{selectedPet.details.ong}</Text>
                  </Text>
                  <Text>
                    <Text style={styles.boldText}>Raça: </Text>
                    <Text>{selectedPet.details.raca}</Text>
                  </Text>
                  <Text>
                    <Text style={styles.boldText}>Espécie: </Text>
                    <Text>{selectedPet.details.especie}</Text>
                  </Text>
                  <Text>
                    <Text style={styles.boldText}>Pelagem: </Text>
                    <Text>{selectedPet.details.pelagem}</Text>
                  </Text>
                  <Text>
                    <Text style={styles.boldText}>Porte: </Text>
                    <Text>{selectedPet.details.porte}</Text>
                  </Text>
                  <Text>
                    <Text style={styles.boldText}>NGM Adota porquê: </Text>
                    <Text>{selectedPet.details.adotaPorQue}</Text>
                  </Text>
                </View>
              </>
            )}
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingBottom: 20, // Para dar espaço ao final da lista
  },
  box: {
    width: 300,
    height: 400,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 295,
    borderRadius: 10,
  },
  nome: {
    marginVertical: 10,
    fontSize: 20,
    color: 'white',
  },
  button: {
    backgroundColor: '#87CEEB',
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  frase: {
    marginVertical: 15,
    fontSize: 18,
    textAlign: 'center',
  },
  informacoes: {
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  closeButton: {
    backgroundColor: '#87CEEB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default AdocaoScreen;
