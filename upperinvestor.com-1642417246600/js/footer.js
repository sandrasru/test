let currentNoBroker = {
    name: "tutorinvestor",
};

// Values that change between different footer Versions. Only change THESE variables according to the lander version !
// const sourceFiles = "index_files/images";
const cookieDomSelector = ["a#cookie-link", "a.eupopup-button.eupopup-button_2", ".cookie-policy-link"];
// End version variables

let contentSourceType = "";
let stylesSourceType = "";
let finnalContentSource = "";
let finnalStyleSource = "";

const possibleSourceTypes = {
    infoAgencies: "infoAgencies",
    infoBrokers: "infoBrokers",
};

let platformDom = "";
let geoDom = "";
let brokerDom = "";
let languageDom = "";

let agencyDom = "";

let finnalPlatform = "";
let finnalLanguage = "";

let errorConditions = {
    state: false,
    msg: "",
};
let logo = "";
let favicon = "";

const agencies = ["ggoose", "investoralia", "tutorinvestor", "koala", "wonderinvestor", "upperinvestor", "investoline"];
let allBrokers = ["101_investing", "brokereo", "atf", "primefin", "roinvesting", "tradedwell", "etfinance", "t1_markets", "investlite", "ab_investing", "investby", "investfw", "capitalix"];
const koalaDomains = ["thetraderreviews.com", "thesmarttrading.com", "tradelikeahero.com"];

const languagesForSendLead = {
    arab: "arab",
    af: "af",
    nl: "nl",
    en: "en",
    fr: "fr",
    de: "de",
    it: "it",
    ko: "ko",
    no: "no",
    pt: "pt",
    es: "es",
    sw: "sw",
    gr: "gr",
    th: "th",
    is: "is",
    vt: "vt",
    ms: "ms",
};

const possibleLanguages = {
    arabic: "arab",
    afrikaans: "af",
    dutch: "nl",
    english: "en",
    french: "fr",
    german: "de",
    italian: "it",
    korean: "ko",
    norwayan: "no",
    portuguese: "pt",
    spanish: "es",
    swedish: "sw",
    greek: "gr",
    thai: "th",
    malay: "ms",
};

const geosBrokers = {
    IE: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["en"],
    },
    ES: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["es", "en"],
    },
    IT: {
        mainBroker: "capixal",
        possibleBrokers: ["capixal"],
        language: ["it", "en"],
    },
    NL: {
        mainBroker: "capixal",
        possibleBrokers: ["capixal"],
        language: ["nl", "en"],
    },
    DE: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["de", "en"],
    },
    PT: {
        mainBroker: "investfw",
        possibleBrokers: ["investfw", "capixal"],
        language: ["pt", "en"],
    },
    FR: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["fr", "en"],
    },
    CH: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["de", "en"],
    },
    AT: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["de", "en"],
    },
    GB: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["en"],
    },
    SE: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["se", "en"],
    },
    IN: {
        mainBroker: "primefin",
        possibleBrokers: ["primefin", "investby"],
        language: ["en", "in"],
    },
    NO: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["no", "en"],
    },
    MY: {
        mainBroker: "investby",
        possibleBrokers: ["investby", "capitalix"],
        language: ["en", "ms"],
    },
    AE: {
        mainBroker: "ab_investing",
        possibleBrokers: ["ab_investing"],
        language: ["en", "arab"],
    },
    TH: {
        mainBroker: "capitalix",
        possibleBrokers: ["capitalix", "investfw", "investby", "primefin"],
        language: ["en", "th"],
    },
    TW: {
        mainBroker: "investby",
        possibleBrokers: ["investby"],
        language: ["en"],
    },
    ZA: {
        mainBroker: "investby",
        possibleBrokers: ["investby", "primefin"],
        language: ["en", "af"],
    },
    BH: {
        mainBroker: "ab_investing",
        possibleBrokers: ["ab_investing"],
        language: ["en"],
    },
    QA: {
        mainBroker: "ab_investing",
        possibleBrokers: ["ab_investing"],
        language: ["en"],
    },
    SA: {
        mainBroker: "ab_investing",
        possibleBrokers: ["ab_investing"],
        language: ["en"],
    },
    PH: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["en"],
    },
    GR: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["en", "gr"],
    },
    LI: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["en"],
    },
    IS: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["en"],
    },
    FI: {
        mainBroker: "",
        possibleBrokers: [""],
        language: ["en", "fi"],
    },
    KR: {
        mainBroker: "",
        possibleBrokers: [""],
        language: ["en", "kr"],
    },
    CL: {
        mainBroker: "investby",
        possibleBrokers: ["ab_investing", "investby"],
        language: ["es", "en"],
    },
    GT: {
        mainBroker: "investby",
        possibleBrokers: ["ab_investing", "investby"],
        language: ["es", "en"],
    },
    MX: {
        mainBroker: "investby",
        possibleBrokers: ["ab_investing", "investby"],
        language: ["es", "en"],
    },
    PE: {
        mainBroker: "investby",
        possibleBrokers: ["ab_investing", "investby"],
        language: ["es", "en"],
    },
    CR: {
        mainBroker: "ab_investing",
        possibleBrokers: ["ab_investing"],
        language: ["es", "en"],
    },

    LU: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["en, de"],
    },

    VN: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["en"],
    },
    BR: {
        mainBroker: "",
        possibleBrokers: [],
        language: ["pt"],
    },

    error_language: {
        mainBroker: "error_broker",
        possibleBrokers: ["error_broker"],
        language: ["error_language"],
    },
};

let plataformsList = {
    default: {
        licence: false,
        hasLogoBroker: false,
    },
    facebook: {
        license: false,
        hasLogoBroker: false,
    },
    taboola: {
        license: true,
        hasLogoBroker: false,
    },
    outbrain: {
        license: true,
        hasLogoBroker: false,
    },
    dv360: {
        license: true,
        hasLogoBroker: true,
    },
    dv360native: {
        license: true,
        hasLogoBroker: true,
    },
    reddit: {
        license: false,
        hasLogoBroker: false,
    },
    bing: {
        license: false,
        hasLogoBroker: false,
    },
    adwords: {
        license: true,
        hasLogoBroker: true,
    },
    zemanta: {
        license: true,
        hasLogoBroker: false,
    },
    gemini: {
        license: true,
        hasLogoBroker: true,
    },
    twitter: {
        license: false,
        hasLogoBroker: false,
    },
    error_platform: {
        license: false,
        hasLogoBroker: false,
    },
    // Aqui comienzan los que no tengo datos, y los pongo por default sin licencia y con logo de golden goose
    adup: {
        license: false,
        hasLogoBroker: false,
    },
    apple: {
        license: false,
        hasLogoBroker: false,
    },
    appnexus: {
        license: false,
        hasLogoBroker: false,
    },
    bucksense: {
        license: false,
        hasLogoBroker: false,
    },
    criteo: {
        license: false,
        hasLogoBroker: false,
    },
    engageya: {
        license: false,
        hasLogoBroker: false,
    },
    eplanning: {
        license: false,
        hasLogoBroker: false,
    },
    gdn: {
        license: false,
        hasLogoBroker: false,
    },
    kayzen: {
        license: false,
        hasLogoBroker: false,
    },
    mowplayer: {
        license: false,
        hasLogoBroker: false,
    },
    plista: {
        license: false,
        hasLogoBroker: false,
    },
    pocketmath: {
        license: false,
        hasLogoBroker: false,
    },
    smadex: {
        license: false,
        hasLogoBroker: false,
    },
    acuity: {
        license: false,
        hasLogoBroker: false,
    },
};

let allDetails = {};
let createTaboolaParagraph = (broker, lang) => {};

const setError = (msg) => {
    errorConditions.state = true;
    errorConditions.msg = msg;
    finnalLanguage = "error_language";
    finnalPlatform = "error_platform";
};

const parseData = () => {
    platformDom = document.querySelector("input[name='source_platform_footer']").value.toLowerCase();
    geoDom = document.querySelector("input[name='country_code_footer']").value.toUpperCase();
    brokerDom = document.querySelector("input[name='broker_name_footer']").value.toLowerCase();
    if (document.querySelector("input[name='language']") != null) {
        languageDom = document.querySelector("input[name='language']").value.toLowerCase();
    } else {
        languageDom = "";
    }
    if (document.querySelector("input[name='agency_name_footer']") != null) {
        agencyDom = document.querySelector("input[name='agency_name_footer']").value.toLowerCase();
        // solve error from radon of investorIalia instead of investoralia
        if (agencyDom === "investorialia") {
            agencyDom = "investoralia";
        }
    } else {
        agencyDom = false;
        if (brokerDom === "investorialia") {
            brokerDom = "investoralia";
        }
    }

    // Modify send-lead.php url for correct pixel execution on send-lead.php
    let urlsParams = new URLSearchParams(document.location.search.substring(1));
    let acc_id = urlsParams.get("acc_id");
    if (acc_id != null) {
        acc_id = acc_id.replaceAll('"', "");
        var forms = document.getElementsByClassName("needs-validation");
        var validation = Array.prototype.map.call(forms, function(form) {
            let action = form.getAttribute("action");
            if (action.includes("send-lead.php")) {
                form.setAttribute("action", action + "?acc_id=" + acc_id);
            }
        });
    }

    // solve error from radon of Investbuy instead of investoralia
    if (brokerDom === "investbuy") {
        brokerDom = "investby";
    }

    //make compatible old landers with no_broker as ggoose with new onces
    if (brokerDom === "no_broker" && !agencyDom) {
        brokerDom = "ggoose";
    }

    return true;
};

const getLanguage = () => {
    // verify if language was salected. If yes, check if is allowed for the geo. If not, select first language
    if (languageDom != "") {
        // transform languageDom from long to short (ex: spanish -> es)
        if (typeof possibleLanguages[languageDom] != "undefined") {
            languageDom = possibleLanguages[languageDom];
        } else if (typeof languagesForSendLead[languageDom] != "undefined") {
            languageDom = languagesForSendLead[languageDom];
        } else {
            setError("language is not in the database");
            return false;
        }
        // comentado la seccion de arriba. No hay chequeo ahora. Cualquier geo puede ir con el footer en la lengua de la laner
        finnalLanguage = languageDom;
    } else {
        finnalLanguage = geosBrokers[geoDom].language[0];
    }
    return finnalLanguage;
};

const getDetails = () => {
    if (typeof platformDom === null || typeof geoDom === null || typeof brokerDom === null) {
        setError("some of the variables is null. Error receiving info from html and radon");
        return false;
    } else {
        if (typeof geosBrokers[geoDom] == "undefined") {
            setError("Geo selected is not in the database");
            return false;
        } else if (typeof plataformsList[platformDom] === "undefined") {
            finnalPlatform = "default";
            // return true;
        } else {
            finnalPlatform = platformDom;
            // return true;
        }
    }

    // check if it exists agecyDom field, for old campaigns with only one field on the form
    let transitAgency = agencyDom ? agencyDom : brokerDom;
    // verify if it doesn go with license -> means it goes with agency
    if (!plataformsList[finnalPlatform].license) {
        contentSourceType = possibleSourceTypes.infoAgencies;
        stylesSourceType = possibleSourceTypes.infoAgencies;
        //TODO: cmabiar el agencies.indexof por el allDetails.infoAgencies[agencyDom] != "undefined"
        if (agencies.indexOf(transitAgency) != -1) {
            // select agency from agencyDom
            finnalContentSource = transitAgency;
            finnalStyleSource = transitAgency;
        } else {
            // default values of agency in case agency is not in database
            finnalContentSource = currentNoBroker.name;
            finnalStyleSource = currentNoBroker.name;
        }
    } else {
        // content is a broker content

        // adwords has 2 possibilities, with or without licence. It should be created a new platform called f.e adwords_w_license, but problems with radon, so Create logic inside.
        if (agencies.indexOf(transitAgency) != -1 && finnalPlatform === "adwords") {
            contentSourceType = possibleSourceTypes.infoAgencies;
            stylesSourceType = possibleSourceTypes.infoAgencies;
            finnalContentSource = transitAgency;
            finnalStyleSource = transitAgency;
        } else if (geosBrokers[geoDom].possibleBrokers.indexOf(brokerDom) == -1) {
            // verify if selected broker goes ok in geo selected.
            setError("broker selected not allowed in geo selected");
            return false;
        } else if (allDetails.infoBrokers[brokerDom] === "undefined") {
            setError("selected broker not in data base");
            return false;
        } else {
            contentSourceType = possibleSourceTypes.infoBrokers;
            finnalContentSource = brokerDom;
            // Verify if the platform selected goes with broker logo or Agency Logo(tutor/invest/golden)
            if (plataformsList[finnalPlatform].hasLogoBroker) {
                stylesSourceType = possibleSourceTypes.infoBrokers;
                finnalStyleSource = brokerDom;
                // check if it goes with agency selected or random
            } else if (agencies.indexOf(transitAgency) != -1) {
                stylesSourceType = possibleSourceTypes.infoAgencies;
                finnalStyleSource = transitAgency;
            } else {
                stylesSourceType = possibleSourceTypes.infoAgencies;
                // select logo for koala in case campaign is part of koala domains
                if (koalaDomains.indexOf(window.location.hostname) != -1) {
                    finnalStyleSource = "koala";
                } else {
                    finnalStyleSource = currentNoBroker.name;
                }
            }
        }
    }

    return true;
};

let createFooter = (data) => {
    var imgLogoSrc = "";
    imgLogoSrc = data.logo;

    var contentPlatform = "";
    if (data.platform === "outbrain" || data.platform === "zemanta") {
        contentPlatform = data.broker.body.outbrainText;
    } else {
        contentPlatform = data.broker.body.cfd;
    }

    //check brokers for malaysa and UAE for taboola
    let contactPlatform = "";
    if (data.platform === "taboola" && data.broker.name === "ab_investing") {
        contactPlatform = `<a href="https://${window.location.hostname}/contactus/index.html">Contact</a>`;
    } else if (data.platform === "taboola" && data.broker.name === "investby") {
        contactPlatform = `<a href="https://${window.location.hostname}/contactus_investby/index.html">Contact</a>`;
    } else {
        contactPlatform = data.broker.contact;
    }

    return `
  <div class="container">
    <div class="row justify-content-center">
      <div class="footer_container col-sm-12 col-md-10 col-lg-10 ">
        <div class="footer__links">
          <img src="${imgLogoSrc}" class="my-4">
          <div class="links-container mb-2 ">
            <p class="link-item">
              ${data.broker.privacy}
              <!-- data.links ? data.broker.privacy : "" -->
            </p>
            <p class="link-item">
              ${data.broker.terms}
            </p>
            <p class="link-item">
              ${contactPlatform}
            </p>
           
            <p class="link-item ${data.language === "de" ? "" : "display-none"}">
              ${data.broker.impressum}
            </p>
          </div>
        </div>
        <div class="main-text">
          <div class="footer-txtblock ${data.platform === "taboola" ? "display-none" : ""}">
            <p class="">
              ${contentPlatform}
            </p>
            <p class=" ">
              ${data.broker.body.rest}
            </p>
          </div>
          <div class="footer-txtblock ${data.platform === "taboola" ? "" : "display-none"}">
            <p class="">
              ${data.language === "no" ? data.broker.body.taboola : data.broker.body.rest}
            </p>
            <p class="">
              ${data.taboola}
            </p>
          </div>
        </div>
  
      </div>
    </div>
  </div>
    
    `;
};

const addStyle = (() => {
    const style = document.createElement("style");
    document.head.append(style);
    return (styleString) => (style.textContent = styleString);
})();

let generalStyles = (brokerData) => {
    return `
  footer#footer__identity {
    background: url()!important;
    background-color: ${brokerData.footerBackgroundColor} !important;
    padding-top: 2rem;
    padding-bottom: 2rem;

  }
  footer#footer__identity .footer-txtblock {
    padding-left: 0.2em;
    font-size: 13px;
    font-weight: 300;
    line-height: 19.77px;
    letter-spacing: 0.011em;
    padding-bottom: 2rem;
  }
  footer#footer__identity .footer-txtblock p  {
    color: ${brokerData.footerTextColor} !important;
  }
  footer#footer__identity .footer-txtblock a {
    font-weight: bold;
    color: ${brokerData.footerLinkColor} !important;
  }
  
  footer#footer__identity .links-container {
    margin: 1rem 0 2rem 0;
    display: flex;
  }
  footer#footer__identity .links-container .link-item a {
    margin-right: 1em;
    color: ${brokerData.footerLinkColor} !important;
    font-size: 15px;
    font-weight: 600;
  }
  footer#footer__identity .footer__links img {
    max-width: 200px;
    width: ${typeof brokerData.footerImgLength === "undefined" ? "100%" : brokerData.footerImgLength}!important;
  }
  @media screen and (max-width: 1000px) {
    footer#footer__identity .links-container {
      align-items: center;
      margin-left: 0rem;
      padding-top: 3px;
    }
    footer#footer__identity .link-item {
      margin-right: 0;
    }
    footer#footer__identity .footer__links {
      text-align: left !important;
    }
    footer#footer__identity footer .footer__links img {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 834px) {
    footer#footer__identity .links-container {
      margin-left: 1rem;
    }
    footer#footer__identity .footer__links {
      display: flex;
      text-align: center !important;
    }
  }
  @media (max-width: 550px) {
    footer#footer__identity .footer_container {
      text-align: center;
    }
    footer#footer__identity .links-container {
      flex-direction: column;
    }
    footer#footer__identity .footer__links {
      flex-direction: column;
      align-items: center;
    }
    footer#footer__identity .main-text {
      display: flex;
      justify-content: center;
    }
    footer#footer__identity .main-text .footer-txtblock {
      flex: 0 0 85%;
    }
  }
  section.copyright {
    background-color: gray;
    font-size: 13px;
    line-height: 17.7px;
    color: black;
  }
  
  @media screen and (max-width: 768px) {
    section.copyright {
      text-align: center;
    }
  }
  .copyright p {
    padding-top: 1rem;
  }

  .display-none {
    display: none !important;
  }
  `;
};

const displayError = () => {
    if (errorConditions.state) {
        // alert(errorConditions.msg);
        console.log(errorConditions.msg);
    }
};

const changeFormLinks = (data) => {
    let privacyFormLink = document.querySelectorAll("form label a:first-child");
    let termsFormLink = document.querySelectorAll("form label a:nth-child(2)");
    // let languageForm = document.querySelectorAll("form input[name='language']");
    let titleForm = document.querySelectorAll("form input[name='title']");
    let titleDom = document.title;

    let referrerDom = document.querySelector("input[name='referrer']");
    // add referrer for broker
    var ref = window.location.href;
    // var url = ref.substring(0, ref.indexOf(".php") + 4);
    var url = ref;
    if (referrerDom != null) {
        referrerDom.value = url;
    } else {
        referrerDom = document.createElement("input");
        referrerDom.type = "hidden";
        referrerDom.name = "referrer";
        referrerDom.value = url;
        if (document.querySelectorAll("form") != null) {
            document.querySelectorAll("form").forEach((el) => {
                el.appendChild(referrerDom);
            });
        }
    }

    let cookieLink = "";
    cookieDomSelector.forEach((el) => {
        if (document.querySelector(el) != null) {
            cookieLink = document.querySelector(el);
        }
    });
    let favicon = document.querySelector("link.favicon");

    if (privacyFormLink != null) {
        Array.prototype.map.call(privacyFormLink, function(e) {
            e.href = data.links.privacy;
        });
    }
    if (termsFormLink != null) {
        Array.prototype.map.call(termsFormLink, function(e) {
            e.href = data.links.terms;
        });
    }
    if (languageDom != null) {
        Array.prototype.map.call(languageDom, function(e) {
            e.value = finnalLanguage;
        });
    }
    if (titleDom != null && titleForm != null) {
        Array.prototype.map.call(titleForm, function(e) {
            e.value = titleDom;
        });
    }
    if (cookieLink != null) {
        if (!(typeof data.links.cookie === "undefined")) {
            cookieLink.href = data.links.cookie;
        }
    }
    if (favicon != null) {
        favicon.href = data.favicon;
    }
};

let error_broker = {
    privacy: "",
    terms: "",
    contact: "",
    body: {
        error_language: {
            body: {
                cdf: "",
                rest: `THERE IS AN ERROR WITH SELECTER PARAMETERS FOR GEO AND PLATFORM SELECTED. PLEASE REVIEW INFORMATION`,
            },
        },
        error_fetching: {
            body: {
                cdf: "",
                rest: `THERE IS AN ERROR FETCHING DATA FROM SERVER`,
            },
        },
    },
    sourceColors: {
        footerBackgroundColor: "red",
        footerTextColor: "white",
        footerLinkColor: "#f1be32",
    },
};

const fetchFooter = async(lang) => {
    let dataToRespond;
    // const response = await fetch(`StaticContent/js/footer-${lang}.js`, {
    const response = await fetch(`https://cdn-static-content.fra1.cdn.digitaloceanspaces.com/js/footer-${lang}.js`, {
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
        },
        cache: "no-cache",
    });
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        console.log(response);
        throw new Error(message);
    }
    await response.text().then((text) => {
        const data = eval(text);
        dataToRespond = data;
    });
    return dataToRespond;
};

const executeFooter = async() => {
    let data, footerContent;

    let parseOk = parseData();

    let languageOk = getLanguage();

    let fetchOk, detailsOk;

    if (parseOk && languageOk) {
        await fetchFooter(languageOk)
            .then((data) => {
                // retrieve broker and agency info
                allDetails = data.allDetails;
                // retrieve taboola function
                createTaboolaParagraph = data.createTaboolaParagraph;
                // retrieve Details
                detailsOk = getDetails();
                // to test:
                window.data1 = data;
                fetchOk = true;
            })
            .catch((error) => {
                fetchOk = false;
                console.log(error);
            });
    }

    if (!fetchOk) {
        data = {
            logo: "",
            links: "",
            language: "",
            broker: error_broker.body["error_fetching"],
            sourceColors: error_broker.sourceColors,
            platform: finnalPlatform,
            favicon: "",
        };
    } else if (!parseOk || !detailsOk) {
        data = {
            logo: "",
            links: "",
            language: "",
            broker: error_broker.body["error_language"],
            sourceColors: error_broker.sourceColors,
            platform: finnalPlatform,
            favicon: "",
        };
    } else {
        if (typeof allDetails[contentSourceType][finnalContentSource] === "undefined") {
            setError("some of the informations of the broker are missing in the databases");
            data = {
                logo: "",
                links: "",
                language: "",
                broker: error_broker.body["error_language"],
                sourceColors: error_broker.sourceColors,
                platform: finnalPlatform,
                favicon: "",
            };
        } else {
            data = {
                logo: allDetails[stylesSourceType][finnalStyleSource].logo,
                favicon: allDetails[stylesSourceType][finnalStyleSource].favicon,
                sourceColors: allDetails[stylesSourceType][finnalStyleSource].sourceColors,
                links: allDetails[contentSourceType][finnalContentSource],
                broker: allDetails[contentSourceType][finnalContentSource].body[languageOk],
                language: languageOk,
                platform: finnalPlatform,
            };
            // check if platform is taboola. In that case, it has its own text, that depends on the broker info and language
            if (finnalPlatform === "taboola") {
                data.taboola = createTaboolaParagraph(data.broker.name, data.language);
            } else {
                data.taboola = false;
            }
        }
    }
    changeFormLinks(data);
    footerContent = createFooter(data);

    addStyle(generalStyles(data.sourceColors));

    let footer = document.querySelector("footer");
    if (footer) {
        if (!(footer.getAttribute("id") === "footer__identity")) {
            footer.setAttribute("id", "footer__identity");
        }
        footer.innerHTML = footerContent;
    } else {
        footer = document.createElement("footer");
        footer.setAttribute("id", "footer__identity");
        footer.innerHTML = footerContent;
        document.querySelector("body").appendChild(footer);
    }

    displayError();
};

const executeHotScript = (code) => {
    (function(h, o, t, j, a, r) {
        h.hj =
            h.hj ||
            function() {
                (h.hj.q = h.hj.q || []).push(arguments);
            };
        h._hjSettings = { hjid: code, hjsv: 6 };
        a = o.getElementsByTagName("head")[0];
        r = o.createElement("script");
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
        console.log("hotjar executated");
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
};

let hotCodes = {
    amazon: 2557547,
    aliexpress: 2563830,
    microsoft: 2563826,
    tesla: 2563828,
};

const obtainBrands = () => {
    const strings = [];

    let h1 = document.querySelector("h1");
    let h2 = document.querySelector("h2");
    let h3 = document.querySelector("h3");
    if (h1) {
        strings.push(h1.innerText.toLowerCase());
    }
    if (h2) {
        strings.push(h2.innerText.toLowerCase());
    }
    if (h3) {
        strings.push(h3.innerText.toLowerCase());
    }

    for (brand in hotCodes) {
        for (let i = 0; i < strings.length; i++) {
            if (strings[i].includes(brand)) {
                return { brand: brand, code: hotCodes[brand] };
            }
        }
    }
    return false;
};

const executeHotjar = () => {
    // avoid execution of hotjar on development environment
    let url = window.location.hostname;
    let blacklist = ["localhost", "127.0.0.1", "marketportofolio.com"];
    if (blacklist.includes(url)) {
        return;
    }
    // console.log("executing hotjar");
    let domBrand = obtainBrands();
    if (domBrand) {
        // console.log(`brand: ${domBrand.brand}. code: ${domBrand.code}`);
        executeHotScript(domBrand.code);
    }
};

// const executeGtmForm = () => {
//     let btn = document.querySelector("form button[type='submit']");

//     btn.addEventListener("click", function(event) {
//         event.preventDefault();
//         if (window.dataLayer) {
//             let error = false;
//             dataLayer.push({ event: "eventoGA", eventCat: "formulario_lead", eventAct: "formulario_envío_intento", eventLbl: "" });

//             let elements = document.querySelectorAll("form input[required]");
//             Array.prototype.map.call(elements, function(input, pos) {
//                 switch (input.name) {
//                     case "Complete_name":
//                         let nameContent = input.value.split(" ");
//                         // Error Complete Name
//                         if (!(nameContent.length >= 2)) {
//                             // call gtm with error name
//                             dataLayer.push({ event: "eventoGA", eventCat: "formulario_lead", eventAct: "formulario_envío_error", eventLbl: "nombre_completo" });
//                             error = true;
//                         } else if (!(nameContent[0].length > 0) || !(nameContent[1].length > 0)) {
//                             // call gtm with error name
//                             dataLayer.push({ event: "eventoGA", eventCat: "formulario_lead", eventAct: "formulario_envío_error", eventLbl: "nombre_completo" });
//                             error = true;
//                         }
//                         break;
//                     case "FirstName_1":
//                         // Error First Name
//                         if (!input.validity.valid) {
//                             dataLayer.push({ event: "eventoGA", eventCat: "formulario_lead", eventAct: "formulario_envío_error", eventLbl: "nombre" });
//                             error = true;
//                         }
//                         break;
//                     case "LastName_1":
//                         // Error Last Name
//                         if (!input.validity.valid) {
//                             dataLayer.push({ event: "eventoGA", eventCat: "formulario_lead", eventAct: "formulario_envío_error", eventLbl: "apellido" });
//                             error = true;
//                         }
//                         break;
//                     case "Email_1":
//                         // Error Email
//                         if (!input.validity.valid) {
//                             dataLayer.push({ event: "eventoGA", eventCat: "formulario_lead", eventAct: "formulario_envío_error", eventLbl: "email" });
//                             error = true;
//                         }
//                         break;
//                     case "Phone_1":
//                         // Error Phone
//                         if (!input.validity.valid) {
//                             dataLayer.push({ event: "eventoGA", eventCat: "formulario_lead", eventAct: "formulario_envío_error", eventLbl: "tlf" });
//                             error = true;
//                         }
//                         break;
//                 }
//             });

//             // fire pixel sin error
//             if (!error) {
//                 dataLayer.push({ event: "eventoGA", eventCat: "formulario_lead", eventAct: "formulario_envío_OK", eventLbl: "" });
//             } else {
//                 dataLayer.push({ event: "eventoGA", eventCat: "formulario_lead", eventAct: "formulario_envío_error_completo", eventLbl: "" });
//             }
//         }
//     });
// };

window.addEventListener("load", async function() {
    executeFooter();
    executeHotjar();
    executeGtmForm();
});