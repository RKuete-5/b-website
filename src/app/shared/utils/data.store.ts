export const cards = [
  { class: "blue",url: "gocno", color: "#517BBD", title: "PRODUIT", description: "Pour les cas d’usages communs à l’IT, nous développons des solutions informatiques simples facilitant l’usage de logiciels existants complexes.", detail: "Nouveauté 2022 : CNO, solution de gouvernance Kubernetes.", action: "Décomplexifiez Kubernetes" },
  { class: "green",url: "/expertise", color: "#189754", title: "EXPERTISE", description: "Pour vos cas d’usages spécifiques, nous apportons une expertise cloud adaptée aux besoins de votre entreprise. ", detail: "DevSecOps, Cybersécurité, Big Data, IA & Machines learnings.", action: "Accélérez votre transition" },
  { class: "red",url: "/formations", color: "#DB4537", title: "FORMATIONS K8S", description: "Pour une transition viable sur le long terme, engagez vos unités vers l’autonomie en créant un programme de formation Kubernetes sur-mesure.", detail: "Formations reconnues par la Linux foundation : CKA, CKAD & CKS", action: "Gagnez en autonomie" },
];

export const imgs = [
  {url: "../../assets/img/MAIF.svg"},
  {url: "../../assets/img/PWC.svg"},
  {url: "../../assets/img/BNP.svg"},
  {url: "../../assets/img/France Médias Monde.svg"},
  {url: "../../assets/img/Luxembourg.svg"},
  {url: "../../assets/img/Swisslife.svg"},
  {url: "../../assets/img/Natixis.svg"},
  {url: "../../assets/img/Orange.svg"},
  {url: "../../assets/img/Hermès.svg"}
];


export const formationTypes = [
  {img: "../../assets/img/certifie.svg", title: "FORMATIONS CERTIFIÉES", description: "1e entreprise certifiée Kubernetes Training Partner en France et en Afrique, nous bénéficions des supports de formation officiels de la Linux Foundation."},
  {img: "../../assets/img/certifiante.svg", title: "FORMATIONS CERTIFANTES", description: "Nos formations préparent vos équipes à l’obtention des certifications : CKA, CKS, et CKAD. Reconnues sur le marché, ces formations valorisent le capital de vos unités et favorisent une adoption engageante."},
  {img: "../../assets/img/experts.svg", title: "EXPERTS FORMATEURS", description: "Quand nos formateurs ne sont pas en classe, ils sont sur le terrain et agissent sur des uses cases Kubernetes critiques. De cette expérience, ils agrémentent le spectre théorique par le réel de la pratique."},
  {img: "../../assets/img/intelligent.svg", title: "INTELLIGENCE COLLECTIVE", description: "Dans un cadre collaboratif, indispensable à la réussite d’un projet K8s, vos équipes ont l’avantage d’être sensibilisées aux impératifs techniques et organisationnels propres à leurs cas d’usage tout en renforçant leur culture DevSecOps."},
  {img: "../../assets/img/organisation.svg", title: "ORGANISATION MODULABLE", description: "Des formations physiques, à distance, dans nos locaux ou dans ceux de votre entreprise... Tout le parcours est construit en fonction des disponibilités et contraintes des unités formées."},
  {img: "../../assets/img/classe.svg", title: "CLASSES EXCLUSIVES", description: "L’exclusivité permet à nos formateurs de concilier une approche collective - adaptée à vos réalités - et individuelle - en intégrant un suivi permanent afin d'assurer une mise à niveau commune."},
];


export const formations = [
  {
   tag: "NOVICE", icon : "../../assets/img/BEOPENIT.svg", title: "KUBERNETES FUNDAMENTALS", description: "Familiarisation avec l’outil Kubernetes afin d’être capable de packager une application en parfaite autonomie." ,
   details : [
     {
       label: "Formation BeOpen IT"
     },
     {
       label: "Packager son application"
     },
     {
       label: "Déployer son application"
     }
   ],
   price: "1990 € / 3j(21h)"
  },
  {
    tag: "INTERMEDIAIRE", icon : "../../assets/img/BEOPENIT.svg", title: "KUBERNETES IN PRODUCTION", description: "Déployer son application dans un environnement en production en parfaite autonomie." ,
    details : [
      {
        label: "Formation BeOpen IT"
      },
      {
        label: "Déployer dans un environnement en production"
      },
      {
        label: "Préparation solide à CKAD"
      }
    ],
    price: "1990 € / 3j(21h)"
  },
  {
    tag: "AVANCE", icon : "../../assets/img/LINUX-11.svg", title: "CERTIFIED KUBERNETES ADMINISTRATOR", description: "Administration de l’infrastructure et déploiement de Kubernetes dans un environnement multi-cloud en production." ,
    details : [
      {
        label: "Supports de formation fournis par la Linux Fondation"
      },
      {
        label: "Administration de Kubernetes dans un environnement en prod."
      },
      {
        label: "Préparation au passage de l'examen CKA"
      }
    ],
    price: "2817 € / 4j(28h)"
  },
  {
    tag: "AVANCE", icon : "../../assets/img/LINUX-11.svg", title: "CERTIFIED KUBERNETES APPLICATION DEVELOPER", description: "Préparation CKAD : packager, déployer, configurer une application dans un cluster à plusieurs noeuds." ,
    details : [
      {
        label: "Supports de formation fournis par la Linux Fondation"
      },
      {
        label: "Connaissances avancées en réseaux, sécurité, et stockage"
      },
      {
        label: "Préparation au passage de l'examen CKAD"
      }
    ],
    price: "2817 € / 3j(21h)"
  },
  {
    tag: "EXPERT", icon : "../../assets/img/BEOPENIT.svg", title: "CERTIFIED KUBERNETES ADVANCED", description: "Administration de l’infrastructure et déploiement Kubernetes dans un environnement multi-cloud en production." ,
    details : [
      {
        label: "Formation BeOpen IT"
      },
      {
        label: "Installer Kubernetes en parfaite autonomie"
      },
      {
        label: "Assurer le run des applications en parfaite autonomie"
      }
    ],
    price: "1990 € / 3j(21h)"
  }
];


export const expertiseTerrain = [
  {img: "../../assets/ms/Natixis.svg", label: "Cybersécurité"},
  {img: "../../assets/ms/Hermes.svg", label: "Data, ML & IA"},
  {img: "../../assets/ms/Maif.svg", label: "DevSecOps"},
  {img: "../../assets/ms/Pwc.svg", label: "DevSecOps"},
  {img: "../../assets/ms/Swisslife.svg", label: "Data, ML & IA"},
  {img: "../../assets/ms/Squad.svg", label: "Formations"},
  {img: "../../assets/ms/BNP.svg", label: "DevSecOps"},
  {img: "../../assets/ms/francemediamonde.svg", label: "DevSecOps"},
  {img: "../../assets/ms/Luxembourg.svg", label: "DevSecOps"},
];

export const expertiseReconnue = [
  {img: "../../assets/ms/Kubernetes.svg", label: "+ 10 certifications"},
  {img: "../../assets/ms/Docker.svg", label: "+ 5 certifications"},
  {img: "../../assets/ms/Terraform.svg", label: "+ 10 certifications"},
  {img: "../../assets/ms/Azure.svg", label: "+ 10 certifications"},
  {img: "../../assets/ms/Aws.svg", label: "All certifications"},
];

export const partenaires = [
  {img: "../../assets/ms/Linux - silver member.svg", label: "Membre de la CNCF"},
  {img: "../../assets/ms/Linux training.svg", label: "Formations Certifiées"},
  {img: "../../assets/ms/Kubernetes training.svg", label: "Formations certifiées"},
  {img: "../../assets/ms/Sysdig.svg", label: "Security & Monitoring"},
  {img: "../../assets/ms/Dataiku.svg", label: "IA solutions"},
  {img: "../../assets/ms/vmware.svg", label: "Solutions multicloud"},
  {img: "../../assets/ms/Databricks.svg", label: "Plateforme unifiée data"},
  {img: "../../assets/ms/Nginx.svg", label: "Serveur"},
  {img: "../../assets/ms/Darktrace.svg", label: "IA Cybersécurité"},
  {img: "../../assets/ms/Redhat.svg", label: "Solutions multicloud"}
];


export const comments = [
  {
    name:"Meriem BELAILI",
    photo:"",
    fonction:"INGÉNIEUR DEVOPS CHEZ BEL SA",
    avis:"Très bonne expérience, j'ai fait ma formation CKA chez eux et je suis très satisfaite. Merci à l'équipe, ils sont top !",
    note: 5
    },
    {
    name: "Pierre BRUNEVAL",
    photo:"",
    fonction:"CONSULTANT IT CHEZ HALF CONSULTING",
    avis:"Excellent accompagnement et une véritable maîtrise des sujets abordés.",
    note: 5
    },
    {
    name:"Moïse KOFFI",
    photo:"",
    fonction:"SUPPORT SYSTÈME & CLOUD CHEZ ORANGE GOS",
    avis:"La formation correspondait à mes attentes dans la mesure où elle était en phase avec les défis auxquels nous étions confrontés. Ce que j’appréciais le plus c’était la patience des formateurs et leur pédagogie. Malgré nos activités professionnelles pendant la formation, ils ont su trouver le juste milieu afin de nous partager le maximum de connaissance. Je recommanderai cette formation fortement.",
    note: 5
    }
];