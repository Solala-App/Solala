import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Back from "../../../assets/favicons_js/BackArrow.js";
import Angela from "../../../assets/volunteers/angela.jpg";
import Christoph from "../../../assets/volunteers/christoph.jpg";
import Christopher from "../../../assets/volunteers/christopher.jpg";
import Devika from "../../../assets/volunteers/devika.jpg";
import Drew from "../../../assets/volunteers/drew.jpg";
import Edison from "../../../assets/volunteers/edison.jpg";
import Kimia from "../../../assets/volunteers/kimia.jpg";
import Leej from "../../../assets/volunteers/leej.jpg";
import Placeholder from "../../../assets/volunteers/placeholder.jpg";
import Robert from "../../../assets/volunteers/robert.jpg";
import * as Components from "../../components";
import { theme } from "../../constants";
const { light, text } = theme;

export default function Profile() {
  {
    /* This is an array containing all the profiles for each individual person. Adding all the props as can be seen in the profiles array will allow a programmer to very easily
     * create a new addable person, and a person can be removed by simply removing their data from the array*/
  }
  const profiles = [
    {
      nameAndTitle: "Lee Janzen-Morel, Project Manager Lead",
      image: (
        <Image
          source={Leej}
          style={{ width: RFValue(150), height: RFValue(140) }}
          alt="Picture of Lee Janzen-Morel"
        />
      ),
      redirect: (
        <Components.ProfilePopUp
          name="Lee"
          position="Project Manager"
          skills="Project management, Scrum, HTML, CSS, Bootstrap, Git"
          buttons={[
            {
              style: styles.websiteLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
            {
              style: styles.indeedLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
            {
              style: styles.gitLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
          ]}
          about="I love working with others and helping the people I care most about.
                        I love my family more than anything and try to use tech to make the world
                        a kinder place for my kid to grow up in."
          whyHere="Throughout COVID-19 I watched my friends take on meeting after meeting,
                        driving themselves to burnout. Mental health became just one more thing to do
                        and fell to the wayside. Solala was meant to be a present voice to remind you how
                        important it is to take those 5 minutes, and how small changes can make a huge
                        difference in how you feel."
          profileImage={Leej}
          cards={[
            {
              image: "",
              accolade: "Leadership",
              description:
                "Solala is originally my personal project.But I had a vision for a more collaborative based learning opportunity, so I reached out to my new found community at UW. I lead the charge into the beginnings of our project",
            },
            {
              image: "",
              accolade: "Communication",
              description:
                "With my mind set on a future career in tech PM work I largely worked on this project as Scrum Master, working with each team member to define their individual goals and scoping the project timeline.",
            },
            {
              image: "",
              accolade: "Adaptability",
              description:
                "In addition to PM work I stepped in where needed to keep our project on task. I created much of Solala's design, such as the logo. But I also stepped up technical challenges: coding our initial landing website and technical writing.",
            },
          ]}
        />
      ),
    },

    {
      nameAndTitle: "Christoph Bendix, App Development Lead",
      image: (
        <Image
          source={Christoph}
          style={{ width: RFValue(150), height: RFValue(140) }}
          alt="Picture of Christoph Bendix"
        />
      ),
      redirect: (
        <Components.ProfilePopUp
          name="CHRISTOPH"
          position="App Development Lead"
          skills="Java, React, JS, MySQL, Git"
          buttons={[
            {
              style: styles.indeedLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
            {
              style: styles.gitLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
          ]}
          about="Arts & culture enthusiast, occasional musician and visual artist. Learning computer science to combine my artistic vision with tech."
          whyHere="I chose to work on Solala because I believe mental and emotional health is a daily concern in all fields and should be a focus, and certainly in the field of computer science"
          profileImage={Christoph}
          cards={[
            {
              image: "",
              accolade: "Leadership",
              description:
                "I communicated with the PM our next steps while leading the Software Engineering branch of Solala. Delegated various development tasks to ensure we stayed on target for launch.",
            },
            {
              image: "",
              accolade: "Creativity",
              description:
                "I lead the full stack development of Solala, working with UI and Back-end alike to ensure a high quality and beautiful End User Experience.",
            },
            {
              image: "",
              accolade: "Technical",
              description:
                "I contributed to a significant portion of Solala's code, working with tutorials and other resources to teach myself new skills sets where needed.",
            },
          ]}
        />
      ),
    },

    {
      nameAndTitle: "Drew King, Research Lead",
      image: (
        <Image
          source={Drew}
          style={{ width: RFValue(150), height: RFValue(140) }}
          alt="Picture of Drew King"
        />
      ),
      redirect: (
        <Components.ProfilePopUp
          name="Drew"
          position="Research Lead"
          skills="research, technical writing"
          buttons={[
            {
              style: styles.indeedLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
            {
              style: styles.gitLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
          ]}
          about="I am interested in biotechnology, ethics, and using computers to solve real world problems. My drive and ethos comes from working in a healthy community of people driven to build a better world."
          whyHere="I feel like Solala is the kind of app that could have helped me to manage and prioritize the heavy workload my first quarter at UW."
          profileImage={Drew}
          cards={[
            {
              image: "",
              accolade: "Research",
              description:
                "Solala is a data driven application. In order to prioritize development of the needed tools I lead the research needed that determined Solala's key features.",
            },
            {
              image: "",
              accolade: "Diversity",
              description:
                "I advocated for us to pause at stages of development and better ask how we could build Solala to be accessible and inclusive.",
            },
            {
              image: "",
              accolade: "Data Analytics",
              description:
                "Following the Research phase of solala I monitored for bugs, user engagement, testing phases and more to determine the use and priorities of our product.",
            },
          ]}
        />
      ),
    },

    {
      nameAndTitle: "Christopher Roy, UX/UI Developer Lead",
      image: (
        <Image
          source={Christopher}
          style={{ width: RFValue(150), height: RFValue(140) }}
          alt="Picture of Christopher Roy"
        />
      ),
      redirect: (
        <Components.ProfilePopUp
          name="Christopher"
          position="UX/UI Development Lead"
          skills="Java, Figma, React, SQL, UX Design"
          buttons={[
            {
              style: styles.indeedLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
            {
              style: styles.gitLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
          ]}
          about="My favorite thing to do in coding is front-end development; however, I always like learning more about how everything fits together since I not only love seeing things work but also why they work. Aside from coding, my primary hobbies are running, reading about history, and playing tabletop games which I greatly enjoy."
          whyHere="I have used many other apps to try and overcome the stress of both daily and professional life in the past. They have greatly helped and Solala will undoubtedly develop on those ideas and become even more successful at helping others."
          profileImage={Christopher}
          cards={[
            {
              image: "",
              accolade: "UX Development",
              description:
                "I helped to brainstorm how our app would feel for the customer, my personal focus on our Calender page.",
            },
            {
              image: "",
              accolade: "Leadership",
              description:
                "I lead the team in UI Design in Figma. Through my leadership and communication I set achievable deadlines that help get our app off the ground.",
            },
            {
              image: "",
              accolade: "Front or Back-End Development",
              description:
                "I implemented React or Node.js features and created connections to the Azure Cloud SQL Server where necessary.",
            },
          ]}
        />
      ),
    },

    {
      nameAndTitle: "Navkiran Nijjar, Head of Marketing",
      image: (
        <Image
          source={Placeholder}
          style={{ width: RFValue(150), height: RFValue(140) }}
          alt="Picture of Navkiran Nijjar (Placeholder)"
        />
      ),
      redirect: (
        <Components.ProfilePopUp
          name="Navkiran"
          position="Head of Marketing"
          skills="Marketing"
          buttons={[]}
          about="I must fill out the volunteers page"
          whyHere="or else this will be lame :P"
          profileImage={Placeholder}
          cards={[
            {
              image: "",
              accolade: "Social Media",
              description: "I did cool stuff.",
            },
            { image: "", accolade: "Stuff", description: "more neat things" },
            {
              image: "",
              accolade: "Stuff",
              description:
                "The rougher the seas, the smoother we sail. Ahoy! If ye thinks he be ready to sail a beauty, ye better be willin� to sink with her.",
            },
          ]}
        />
      ),
    },

    {
      nameAndTitle: "Robert Selfe, Social and Emotional Research",
      image: (
        <Image
          source={Robert}
          style={{ width: RFValue(150), height: RFValue(140) }}
          alt="Picture of Robert Selfe"
        />
      ),
      redirect: (
        <Components.ProfilePopUp
          name="Robert"
          position="Social and Emotional Researcher"
          skills="Social Health, Research, Communications, Psychology"
          buttons={[
            {
              style: styles.indeedLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
          ]}
          about="I am a queer social work student who is involved with a million and a half organizations as well as a HUGE person for self-care and mental health and so much more. I am also part of the Drag and drag fundraising community."
          whyHere="I am not in computer sciences or tech I am a Social Worker in training so I bring a different lens to make Solala more person focused. Solala is important and can help people because it can connect people to resources or a reality they may not know about. There are several things people can use or need but do not know about.."
          profileImage={Robert}
          cards={[
            {
              image: "",
              accolade: "Social Health",
              description:
                "I helped to oversee the social aspect of app development, encouraging researched based tools or designs to increase product engagement.",
            },
            {
              image: "",
              accolade: "Research",
              description:
                "Solala is a science based app. I contributed to finding resources for our research to ensure that Solala did what it set out to do in the best way possible.",
            },
            {
              image: "",
              accolade: "Adaptability",
              description:
                "With my experience in social health I was able to point out accessibility concerns within the app and contribute to product testing.",
            },
          ]}
        />
      ),
    },

    {
      nameAndTitle: "Edison Jacob Lueng, Software Engineer",
      image: (
        <Image
          source={Edison}
          style={{ width: RFValue(150), height: RFValue(140) }}
          alt="Picture of Edison Leung"
        />
      ),
      redirect: (
        <Components.ProfilePopUp
          name="Edison"
          position="Software Engineer"
          skills="Java, React, JS, Git"
          buttons={[
            {
              style: styles.indeedLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
            {
              style: styles.gitLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
          ]}
          about="Short little guy who loves coding and engineering and wants to help people through these fields."
          whyHere="I think that mental health is something that is very neglected in todays time and creating something that can help with emotional regulation and mental health would be very beneficial to people who need this."
          profileImage={Edison}
          cards={[
            {
              image: "",
              accolade: "Communication",
              description:
                "I really excelled at working with the app development lead and PM to make sure I kept up with project demands.",
            },
            {
              image: "",
              accolade: "Front-End Development",
              description:
                "After Building the Login page in Figma I helped to code our UX features using React.",
            },
            {
              image: "",
              accolade: "Back-End Development",
              description:
                "I implemented Node.js features and created connections to the Azure Cloud SQL Server where necessary.",
            },
          ]}
        />
      ),
    },

    {
      nameAndTitle: "Hawa Ali Drammeh, UX and Software Engineer",
      image: (
        <Image
          source={Placeholder}
          style={{ width: RFValue(150), height: RFValue(140) }}
          alt="Picture of Hawa Drammeh (Placeholder)"
        />
      ),
      redirect: (
        <Components.ProfilePopUp
          name="Hawa"
          position="Software Developer"
          skills="Java, Figma, Scrum and Agile, UX Design"
          buttons={[
            {
              style: styles.indeedLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
            {
              style: styles.gitLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
          ]}
          about="Third year cs and pre med student at UW! I am interested in medical tech, love to read, and meet new people! I have done a few internships, my current one is focused on mobile development using react native."
          whyHere="As a C.S. major and pre med I always have struggled with managing my stress, time management, and taking care of my mental health. Solala is the app I never knew I needed and I love the concept of trying to address this wide known issue in C.S. and other majors!"
          profileImage={Placeholder}
          cards={[
            {
              image: "",
              accolade: "UX Development",
              description:
                "I helped to brainstorm how our app would feel for the customer, focusing on our ToDo list page.",
            },
            {
              image: "",
              accolade: "Team Player",
              description:
                "I found ways to keep everyone involved and to help everyone better communicate by building our Design Doc.",
            },
            {
              image: "",
              accolade: "Front or Back-End Development",
              description:
                "I implemented React or Node.js features and created connections to the Azure Cloud SQL Server where necessary.",
            },
          ]}
        />
      ),
    },

    {
      nameAndTitle: "Brian Tran, Software Engineer",
      image: (
        <Image
          source={Placeholder}
          style={{ width: RFValue(150), height: RFValue(140) }}
          alt="Picture of Brian Tran (placeholder)"
        />
      ),
      redirect: (
        <Components.ProfilePopUp
          name="Brian"
          position="Software Developer"
          skills="HCI, Java, Figma, UX Design"
          buttons={[
            {
              style: styles.websiteLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
            {
              style: styles.indeedLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
            {
              style: styles.gitLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
          ]}
          about="I am a current Informatics major focusing on Human Computer Interaction and Software Development at UW! I am very eager to learn more and improve my coding skills with you all and maybe learn more languages! Aside from coding, I love to eat and workout."
          whyHere="I feel like mental health is looked down upon society but it plays a big role in our lives. As an Asian American, it is viewed as a weakness and not a strong characteristic in our culture and that needs to change. With Solala, we can address these issues within mental health and CS by providing resources and activities to ease our minds."
          profileImage={Placeholder}
          cards={[
            {
              image: "",
              accolade: "UX Development",
              description:
                "I helped to brainstorm how our app would feel for the customer.",
            },
            {
              image: "",
              accolade: "Front-End Development",
              description:
                "After Building the Login page in Figma I helped to code our UX features using React.",
            },
            {
              image: "",
              accolade: "Front or Back-End Development",
              description:
                "I implemented React or Node.js features and created connections to the Azure Cloud SQL Server where necessary.",
            },
          ]}
        />
      ),
    },

    {
      nameAndTitle: "Devika Dwivedi, Software Engineer",
      image: (
        <Image
          source={Devika}
          style={{ width: RFValue(150), height: RFValue(140) }}
          alt="Picture of Devika Dwivedi"
        />
      ),
      redirect: (
        <Components.ProfilePopUp
          name="Devika"
          position="Software Developer"
          skills="Project management, Scrum, HTML, CSS, Bootstrap, Git"
          buttons={[
            {
              style: styles.indeedLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
          ]}
          about="I'm a rising junior at the University of Washington in the computer science major. I have experience with multiple labs including Grid Lab at UW's Department of Neurosurgery, Koelle Lab in CERID, and am currently doing research relating to cryptography. I love to read, run, and hike."
          whyHere="Current events have increased stress and isolation for a lot of people. These feelings have an immense impact on mental and physical health. Apps like Solala can be a great aid, and I'm excited to help!"
          profileImage={Devika}
          cards={[
            {
              image: "",
              accolade: "Communication",
              description:
                "I really excelled at working with the app development lead and PM to make sure I kept up with project demands.",
            },
            {
              image: "",
              accolade: "Front-End Development",
              description:
                "After Building the Login page in Figma I helped to code our UX features using React.",
            },
            {
              image: "",
              accolade: "Back-End Development",
              description:
                "I implemented Node.js features and created connections to the Azure Cloud SQL Server where necessary.",
            },
          ]}
        />
      ),
    },

    {
      nameAndTitle: "Angela Lee, UX and Software Engineer",
      image: (
        <Image
          source={Angela}
          style={{ width: RFValue(150), height: RFValue(140) }}
          alt="Picture of Angela Lee"
        />
      ),
      redirect: (
        <Components.ProfilePopUp
          name="Angela"
          position="Software Developer"
          skills="HCI, Java, Figma, UX Design"
          buttons={[
            {
              style: styles.indeedLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
            {
              style: styles.gitLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
          ]}
          about="I am most interested in software development and UI design but I am also enthusiastic about math, as I took linear algebra before coming to UW and loved it. In my free time, I enjoy cooking, running, and drawing on my iPad."
          whyHere="I think Solala is important because it helps people stay on top of things in their everyday life when work gets busy. I feel like it's easy to forget about self-care whenever we get busy or stressed out, and it's something we shouldn't neglect."
          profileImage={Angela}
          cards={[
            {
              image: "",
              accolade: "UX Development",
              description:
                "I helped to brainstorm how our app would feel for the customer, focusing on our home page when you first open the app.",
            },
            {
              image: "",
              accolade: "Front-End Development",
              description:
                "After Building the Login page in Figma I helped to code our UX features using React.",
            },
            {
              image: "",
              accolade: "Front or Back-End Development",
              description:
                "I implemented React or Node.js features and created connections to the Azure Cloud SQL Server where necessary.",
            },
          ]}
        />
      ),
    },

    {
      nameAndTitle: "Kimia Nehchiri, UX and Software Engineer",
      image: (
        <Image
          source={Kimia}
          style={{ width: RFValue(150), height: RFValue(140) }}
          alt="Picture of Kimia Nehchiri"
        />
      ),
      redirect: (
        <Components.ProfilePopUp
          name="Kimia"
          position="Software Developer"
          skills="Java, UX design"
          buttons={[
            {
              style: styles.indeedLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
            {
              style: styles.gitLinkButton,
              image: "",
              pressEvent: () => {
                console.log("");
              },
            },
          ]}
          about="I'm excited to be transferring to a University of Washington this fall to study C.S. I'm especially interested in web development and medical AI."
          whyHere="As someone with a busy schedule and ADHD, planning is a must for me. For anybody with mental health struggles, Solala can help make everyday life less intimidating."
          profileImage={Kimia}
          cards={[
            {
              image: "",
              accolade: "UX Development",
              description:
                "I helped to brainstorm how our app would feel for the customer, focusing on our login page.",
            },
            {
              image: "",
              accolade: "Front-End Development",
              description:
                "After Building the Login page in Figma I helped to code our UX features using React.",
            },
            {
              image: "",
              accolade: "Back-End Development",
              description:
                "I implemented Node.js features and created connections to the Azure Cloud SQL Server where necessary.",
            },
          ]}
        />
      ),
    },
  ];

  {
    /* This is a constant which represnts the "home" screen of the profiles page. It is used to dynamically add different team members' profiles and will be called
     whenever this display needs to be generated.*/
  }

  const openingProfileScreen = (
    <ScrollView>
      <Text style={styles.textHeader}>MEET THE CREW</Text>

      <View style={styles.mainView}>
        {profiles.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.tempImage}
            onPress={() =>
              changeScreen(
                <View>
                  <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => changeScreen(openingProfileScreen)}
                  >
                    <Back />
                  </TouchableOpacity>

                  {item?.redirect}
                </View>
              )
            }>
            {item?.image}
            <Text>{item?.nameAndTitle}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  {
    /* This essentially makes the opening screen (the variable screen) the profile pages home, while also allowing for that display to be changed
     * using the setScreen method. Essentially, it creates a mutable element which can be changed through setScreen.*/
  }
  const [screen, setScreen] = useState(openingProfileScreen);

  {
    /* This method takes in a component/element and then changes the valuable screen to become said component/element*/
  }
  const changeScreen = (props) =>
    setScreen(
      <View>
        <View style={styles.cardContainer}> {props} </View>
      </View>
    );

  {
    /* Returns the opening profile screen sandwiched between the header and footer */
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <View style={styles.header}></View>
      </View>

      {screen}

      <Components.Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.primary,
  },
  header: {
    flex: "1",
    flexDirection: "row",
    backgroundColor: theme.colorPalette.pink,
    width: "100%",
    height: RFValue(30),
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  headerBox: {
    height: RFValue(60),
    width: "100%",
  },
  scroller: {
    flex: 1,
  },

  mainView: {
    paddingTop: RFValue(10),
    width: "100%",
    height: RFValue(500),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingBottom: RFValue(500),
    textAlign: "center",
  },
  tempImage: {
    height: RFValue(150),
    width: RFValue(150),
    marginRight: RFValue(5),
    marginLeft: RFValue(5),
    marginBottom: RFValue(10),
  },
  backStyle: {
    width: RFValue(30),
    height: RFValue(20),
  },

  placeholder: {
    backgroundColor: theme.colorPalette.teal,
    width: RFValue(30),
    height: RFValue(30),
  },
  cardText: {
    color: "grey",
  },

  cardHeader: {
    fontWeight: "bold",
    fontSize: RFValue(9),
  },
  websiteLinkButton: {
    width: RFValue(10),
    height: RFValue(10),
    borderRadius: RFValue(20),
    backgroundColor: "#f8f8ff",
  },

  indeedLinkButton: {
    width: RFValue(10),
    height: RFValue(10),
    borderRadius: RFValue(20),
    backgroundColor: "#6A65F0",
  },

  backButton: {
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(40),
    backgroundColor: "grey",
    left: RFValue(600),
    marginTop: RFValue(20),
    marginBottom: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
  },

  cardContainer: {
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
  },

  gitLinkButton: {
    width: RFValue(10),
    height: RFValue(10),
    borderRadius: RFValue(20),
    backgroundColor: "#65F06A",
  },
  textHeader: {
    color: "#61989e",
    fontSize: RFValue(24),
    fontWeight: "bold",
    paddingLeft: RFValue(15),
    paddingTop: RFValue(20),
  },
});
