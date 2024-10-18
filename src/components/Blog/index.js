import React, { useState } from 'react';
import { View, Text, Image, Modal, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Blog = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const data = [
    {
      title: 'Cachorro pode tomar danoninho?',
      image: require('../Home/assets/yogurt-dnm.jpg'),
      text: `Em uma recente pesquisa sobre a alimentação canina, veterinários alertam para os riscos de oferecer Danoninho aos cachorros. O Danoninho, um produto lácteo popular entre crianças, pode não ser a melhor escolha para o seu amigo de quatro patas.

      Assim como alguns humanos, muitos cães são intolerantes à lactose, o açúcar presente no leite. A ingestão de produtos lácteos como o Danoninho pode causar desconforto gastrointestinal, incluindo gases, vômito e diarreia.

      Além da lactose, o Danoninho contém aditivos como sabores artificiais e corantes, que não são recomendados para a dieta canina. Esses ingredientes podem levar a reações alérgicas e outros problemas de saúde.

      Para tutores que desejam mimar seus pets com um lanche especial, existem alternativas seguras e saudáveis. Iogurtes naturais com baixo teor de gordura e sem açúcar adicionado podem ser uma opção, mas sempre com moderação e sob orientação de um veterinário.

      Antes de compartilhar seu lanche com seu cachorro, é essencial consultar um profissional. O que é saboroso para os humanos pode não ser seguro para os nossos amigos peludos. Lembre-se, a saúde do seu pet deve sempre vir em primeiro lugar.`,
    },
    {
      title: 'Remédio anti-pulgas',
      image: require('../Home/assets/Prevencao-pulgas.png'),
      text: `Quando se trata de proteger seus pets de pulgas, é essencial escolher o remédio certo.

      NexGard: Um tablete mastigável com sabor de carne, contendo Afoxolaner. Começa a agir em até 8 horas e protege por 30 dias. Disponível em diferentes dosagens de acordo com o peso do cão.

      Bravecto: Disponível em comprimidos mastigáveis e formato transdermal, o Bravecto trata pulgas, carrapatos e sarna demodécica. Tem efeito em até 12 horas e oferece proteção por até três meses.

      Simparic: Eficaz contra pulgas e várias espécies de carrapatos, o Simparic impede que as pulgas produzam ovos.

      Seresto: Uma coleira antipulgas que libera substâncias para afastar parasitas, protegendo o pet por até 8 meses.

      Revolution: Trata, controla e previne infestações por pulgas, sendo uma opção segura para cães e gatos.

      É crucial consultar um veterinário antes de utilizar qualquer medicamento em seu pet para garantir a escolha mais segura e adequada. Lembre-se de que a saúde e o bem-estar do seu animal de estimação são sempre a prioridade.`,
    },
    {
      title: 'Como treinar o seu peludinho',
      image: require('../Home/assets/como-treinar-um-cachorro.jpg'),
      text: `Treinar seu cachorro é uma parte importante do seu desenvolvimento e pode ser uma experiência gratificante para ambos.

      Escolha Comandos Claros: Use comandos simples como “senta”, “fica”, “vem” e “não”. Certifique-se de que todos na casa usem os mesmos comandos para evitar confundir o cão.

      Recompensas Positivas: Utilize petiscos, carinho ou brinquedos como recompensas para comportamentos positivos. Isso reforça o bom comportamento e encoraja o cão a repeti-lo.

      Consistência: Seja consistente com os comandos e recompensas. Treine em um horário regular e mantenha as regras consistentes para que o cão saiba o que esperar.

      Treinamento em Etapas: Comece com comandos básicos e avance gradualmente para truques mais complexos. Isso ajuda a manter o cão engajado e evita frustrações.

      Paciência e Positividade: Mantenha as sessões de treinamento curtas e positivas. Seja paciente e evite punições, pois elas podem causar medo e ansiedade.

      Socialização: Exponha seu cão a diferentes pessoas, animais e ambientes para ajudá-lo a se tornar bem ajustado e menos temeroso de novas experiências.

      Reforço Contínuo: Mesmo após o cão aprender um comando, continue a praticar e reforçar o comportamento para manter sua obediência afiada.

      Lembre-se, cada cão é único e pode aprender em ritmos diferentes. Respeite o tempo do seu cão e adapte o treinamento às suas necessidades individuais.`,
    },
  ];

  const openModal = (content) => {
    setSelectedContent(content);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.card}>
      {data.map((item, index) => (
        <View key={index} style={styles.cardpulgas}>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.text.slice(0, 100)}...</Text>
          
          <TouchableOpacity style={styles.button} onPress={() => openModal(item)}>
            <Text style={styles.buttonText}>Veja mais</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>{selectedContent?.title}</Text>
          <Image source={selectedContent?.image} style={styles.image} />
          <Text style={styles.text}>{selectedContent?.text}</Text>
          
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: { 
    padding: 30,
    margin: 10, 
    borderRadius: 10,
    backgroundColor: '#fff' 
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  image: {
    width: '100%',
    height: 200, 
    borderRadius: 10 
  },
  text: {
    marginVertical: 10,
  },
  modalContent: { 
    padding: 20 
  },
  button: {
    backgroundColor: 'green', // Cor verde para o botão
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  cardpulgas: { 
    padding: 10,
    marginVertical: 10, 
    borderRadius: 10,
    backgroundColor: '#fff' 
  },
});

export default Blog;
