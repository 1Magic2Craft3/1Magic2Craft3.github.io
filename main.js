const MONTHS = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const familyDefinitions = [
  { id: "anatidae", scientific: "Anatidae", common: "Ducks, Geese, and Waterfowl", accent: "#2e6f70" },
  { id: "megapodiidae", scientific: "Megapodiidae", common: "Megapodes", accent: "#7a5a33" },
  { id: "phasianidae", scientific: "Phasianidae", common: "Pheasants, Grouse, and Allies", accent: "#8c6a43" },
  { id: "podicipedidae", scientific: "Podicipedidae", common: "Grebes", accent: "#5d7f87" },
  { id: "columbidae", scientific: "Columbidae", common: "Pigeons and Doves", accent: "#8d7595" },
  { id: "cuculidae", scientific: "Cuculidae", common: "Cuckoos", accent: "#697d3f" },
  { id: "podargidae", scientific: "Podargidae", common: "Frogmouths", accent: "#746658" },
  { id: "tytonidae", scientific: "Tytonidae", common: "Barn-Owls", accent: "#8a765d" },
  { id: "strigidae", scientific: "Strigidae", common: "Owls", accent: "#6f604b" },
  { id: "sulidae", scientific: "Sulidae", common: "Boobies and Gannets", accent: "#4b7f98" },
  { id: "anhingidae", scientific: "Anhingidae", common: "Anhingas", accent: "#284b50" },
  { id: "phalacrocoracidae", scientific: "Phalacrocoracidae", common: "Cormorants and Shags", accent: "#24414d" },
  { id: "pelecanidae", scientific: "Pelecanidae", common: "Pelicans", accent: "#4d7185" },
  { id: "ardeidae", scientific: "Ardeidae", common: "Herons, Egrets, and Bitterns", accent: "#5c8e8d" },
  { id: "threskiornithidae", scientific: "Threskiornithidae", common: "Ibises and Spoonbills", accent: "#af7c47" },
  { id: "accipitridae", scientific: "Accipitridae", common: "Hawks, Eagles, and Kites", accent: "#9b4533" },
  { id: "pandionidae", scientific: "Pandionidae", common: "Osprey", accent: "#476b78" },
  { id: "falconidae", scientific: "Falconidae", common: "Falcons and Caracaras", accent: "#b55a32" },
  { id: "rallidae", scientific: "Rallidae", common: "Rails, Gallinules, and Coots", accent: "#465c64" },
  { id: "haematopodidae", scientific: "Haematopodidae", common: "Oystercatchers", accent: "#9b4f42" },
  { id: "recurvirostridae", scientific: "Recurvirostridae", common: "Stilts and Avocets", accent: "#8b7c53" },
  { id: "charadriidae", scientific: "Charadriidae", common: "Plovers and Lapwings", accent: "#8b7c53" },
  { id: "scolopacidae", scientific: "Scolopacidae", common: "Sandpipers and Allies", accent: "#99794d" },
  { id: "laridae", scientific: "Laridae", common: "Gulls, Terns, and Skimmers", accent: "#6f92a0" },
  { id: "cacatuidae", scientific: "Cacatuidae", common: "Cockatoos", accent: "#d2a63f" },
  { id: "psittaculidae", scientific: "Psittaculidae", common: "Old World Parrots", accent: "#4b8a50" },
  { id: "alcedinidae", scientific: "Alcedinidae", common: "Kingfishers", accent: "#1f83a1" },
  { id: "meropidae", scientific: "Meropidae", common: "Bee-eaters", accent: "#4e9d68" },
  { id: "coraciidae", scientific: "Coraciidae", common: "Rollers", accent: "#3c8ca4" },
  { id: "picidae", scientific: "Picidae", common: "Woodpeckers", accent: "#8f5338" },
  { id: "ptilonorhynchidae", scientific: "Ptilonorhynchidae", common: "Bowerbirds", accent: "#476a7a" },
  { id: "maluridae", scientific: "Maluridae", common: "Fairywrens", accent: "#426fb0" },
  { id: "meliphagidae", scientific: "Meliphagidae", common: "Honeyeaters", accent: "#bb8a32" },
  { id: "pardalotidae", scientific: "Pardalotidae", common: "Pardalotes", accent: "#6d9b53" },
  { id: "acanthizidae", scientific: "Acanthizidae", common: "Thornbills and Allies", accent: "#71834b" },
  { id: "psophodidae", scientific: "Psophodidae", common: "Whipbirds and Wedgebills", accent: "#5d6d46" },
  { id: "corcoracidae", scientific: "Corcoracidae", common: "White-winged Chough and Apostlebird", accent: "#3d3a37" },
  { id: "campephagidae", scientific: "Campephagidae", common: "Cuckooshrikes", accent: "#65707d" },
  { id: "neosittidae", scientific: "Neosittidae", common: "Sittellas", accent: "#8a7c46" },
  { id: "pachycephalidae", scientific: "Pachycephalidae", common: "Whistlers and Allies", accent: "#9f7f2e" },
  { id: "oriolidae", scientific: "Oriolidae", common: "Old World Orioles", accent: "#9c8b2f" },
  { id: "artamidae", scientific: "Artamidae", common: "Woodswallows, Bellmagpies, and Allies", accent: "#4d555c" },
  { id: "rhipiduridae", scientific: "Rhipiduridae", common: "Fantails", accent: "#557065" },
  { id: "monarchidae", scientific: "Monarchidae", common: "Monarch Flycatchers", accent: "#697d8c" },
  { id: "corvidae", scientific: "Corvidae", common: "Crows, Jays, and Magpies", accent: "#242b31" },
  { id: "petroicidae", scientific: "Petroicidae", common: "Australasian Robins", accent: "#b7443d" },
  { id: "hirundinidae", scientific: "Hirundinidae", common: "Swallows", accent: "#3f7693" },
  { id: "pycnonotidae", scientific: "Pycnonotidae", common: "Bulbuls", accent: "#7f6d50" },
  { id: "aegithalidae", scientific: "Aegithalidae", common: "Long-tailed Tits", accent: "#7a8790" },
  { id: "paridae", scientific: "Paridae", common: "Tits, Chickadees, and Titmice", accent: "#4f6380" },
  { id: "cettiidae", scientific: "Cettiidae", common: "Bush Warblers and Allies", accent: "#6d8053" },
  { id: "acrocephalidae", scientific: "Acrocephalidae", common: "Reed Warblers and Allies", accent: "#8d7b49" },
  { id: "cisticolidae", scientific: "Cisticolidae", common: "Cisticolas and Allies", accent: "#ad8a34" },
  { id: "zosteropidae", scientific: "Zosteropidae", common: "White-eyes, Yuhinas, and Allies", accent: "#7aa46b" },
  { id: "sturnidae", scientific: "Sturnidae", common: "Starlings", accent: "#5d5873" },
  { id: "turdidae", scientific: "Turdidae", common: "Thrushes and Allies", accent: "#735c4c" },
  { id: "muscicapidae", scientific: "Muscicapidae", common: "Old World Flycatchers", accent: "#2f7a95" },
  { id: "dicaeidae", scientific: "Dicaeidae", common: "Flowerpeckers", accent: "#b33f4a" },
  { id: "passeridae", scientific: "Passeridae", common: "Old World Sparrows", accent: "#8c744f" },
  { id: "estrildidae", scientific: "Estrildidae", common: "Waxbills and Allies", accent: "#be6a41" },
  { id: "fringillidae", scientific: "Fringillidae", common: "Finches, Euphonias, and Allies", accent: "#b58d2f" },
  { id: "motacillidae", scientific: "Motacillidae", common: "Wagtails and Pipits", accent: "#6f765c" },
  { id: "laniidae", scientific: "Laniidae", common: "Shrikes", accent: "#6a6870" },
];

const familiesById = Object.fromEntries(
  familyDefinitions.map((family, index) => [family.id, { ...family, index }])
);

const speciesFamilies = {
  "Great Egret": "ardeidae",
  "Spotted Pardalote": "pardalotidae",
  "Swift Parrot": "psittaculidae",
  "Hoary-headed Grebe": "podicipedidae",
  "White-headed Pigeon": "columbidae",
  "Plumed Egret": "ardeidae",
  "Lewin's Honeyeater": "meliphagidae",
  "Australasian Darter": "anhingidae",
  "European Starling": "sturnidae",
  "Fuscous Honeyeater": "meliphagidae",
  "Musk Lorikeet": "psittaculidae",
  "Scarlet Robin": "petroicidae",
  "Mistletoebird": "dicaeidae",
  "Eastern Yellow Robin": "petroicidae",
  "Brown Thornbill": "acanthizidae",
  "White-naped Honeyeater": "meliphagidae",
  "Hardhead": "anatidae",
  "Australasian Grebe": "podicipedidae",
  "Pied Butcherbird": "artamidae",
  "Blue-faced Honeyeater": "meliphagidae",
  "Pale-headed Rosella": "psittaculidae",
  "Tawny Frogmouth": "podargidae",
  "Torresian Crow": "corvidae",
  "Scarlet Myzomela": "meliphagidae",
  "Bar-shouldered Dove": "columbidae",
  "Striated Pardalote": "pardalotidae",
  "Australian Boobook": "strigidae",
  "Golden Whistler": "pachycephalidae",
  "Yellow Thornbill": "acanthizidae",
  "Chestnut-breasted Munia": "estrildidae",
  "Black-shouldered Kite": "accipitridae",
  "Eastern Cattle-Egret": "ardeidae",
  "Australian Pipit": "motacillidae",
  "Double-barred Finch": "estrildidae",
  "Golden-headed Cisticola": "cisticolidae",
  "Straw-necked Ibis": "threskiornithidae",
  "Gray Fantail": "rhipiduridae",
  "Red-browed Firetail": "estrildidae",
  "Silvereye": "zosteropidae",
  "Eastern Whipbird": "psophodidae",
  "Yellow-faced Honeyeater": "meliphagidae",
  "Australian Pelican": "pelecanidae",
  "Chestnut Teal": "anatidae",
  "Great Cormorant": "phalacrocoracidae",
  "Pied Cormorant": "phalacrocoracidae",
  "Common Bronzewing": "columbidae",
  "Black-faced Cuckooshrike": "campephagidae",
  "White-browed Scrubwren": "acanthizidae",
  "Australasian Figbird": "oriolidae",
  "Satin Bowerbird": "ptilonorhynchidae",
  "Red-whiskered Bulbul": "pycnonotidae",
  "Olive-backed Oriole": "oriolidae",
  "Channel-billed Cuckoo": "cuculidae",
  "Eastern Spinebill": "meliphagidae",
  "Eurasian Blackbird": "turdidae",
  "Welcome Swallow": "hirundinidae",
  "Long-billed Corella": "cacatuidae",
  "Royal Spoonbill": "threskiornithidae",
  "Brown Cuckoo-Dove": "columbidae",
  "House Sparrow": "passeridae",
  "Bell Miner": "meliphagidae",
  "Little Black Cormorant": "phalacrocoracidae",
  "Little Wattlebird": "meliphagidae",
  "Crimson Rosella": "psittaculidae",
  "Laughing Kookaburra": "alcedinidae",
  "Pacific Koel": "cuculidae",
  "White-winged Chough": "corcoracidae",
  "Willie-wagtail": "rhipiduridae",
  "Red-rumped Parrot": "psittaculidae",
  "White-faced Heron": "ardeidae",
  "Gray Teal": "anatidae",
  "Superb Fairywren": "maluridae",
  "Eastern Rosella": "psittaculidae",
  "Little Pied Cormorant": "phalacrocoracidae",
  "Eurasian Coot": "rallidae",
  "Dusky Moorhen": "rallidae",
  "Crested Pigeon": "columbidae",
  "Magpie-lark": "monarchidae",
  "Pacific Black Duck": "anatidae",
  "Red Wattlebird": "meliphagidae",
  "Spotted Dove": "columbidae",
  "Silver Gull": "laridae",
  "Pied Currawong": "artamidae",
  "Australian Raven": "corvidae",
  "Australian Magpie": "artamidae",
  "Rock Pigeon": "columbidae",
  "Common Myna": "sturnidae",
  "Maned Duck": "anatidae",
  "Australasian Swamphen": "rallidae",
  "Rainbow Lorikeet": "psittaculidae",
  "Sulphur-crested Cockatoo": "cacatuidae",
  "Little Corella": "cacatuidae",
  "Galah": "cacatuidae",
  "Australian Ibis": "threskiornithidae",
  "Masked Lapwing": "charadriidae",
  "Black Swan": "anatidae",
  "Gray Butcherbird": "artamidae",
  "Noisy Miner": "meliphagidae",
  "Australian King-Parrot": "psittaculidae",
  "Dusky Woodswallow": "artamidae",
  "Nankeen Kestrel": "falconidae",
  "Brown Quail": "phasianidae",
  "Australian Brushturkey": "megapodiidae",
  "Yellow-tailed Black-Cockatoo": "cacatuidae",
  "Variegated Fairywren": "maluridae",
  "Dollarbird": "coraciidae",
  "Shining Bronze-Cuckoo": "cuculidae",
  "Brown Goshawk": "accipitridae",
  "Rainbow Bee-eater": "meropidae",
  "Sacred Kingfisher": "alcedinidae",
  "Brown Gerygone": "acanthizidae",
  "Gray Shrikethrush": "pachycephalidae",
  "Rufous Whistler": "pachycephalidae",
  "Yellow-rumped Thornbill": "acanthizidae",
  "Wonga Pigeon": "columbidae",
  "Pacific Heron": "ardeidae",
  "Australian Reed Warbler": "acrocephalidae",
  "Brown-eared Bulbul": "pycnonotidae",
  "Large-billed Crow": "corvidae",
  "Oriental Turtle-Dove": "columbidae",
  "Asian Tit": "paridae",
  "Eurasian Tree Sparrow": "passeridae",
  "Eurasian Wigeon": "anatidae",
  "Eastern Spot-billed Duck": "anatidae",
  "Northern Pintail": "anatidae",
  "Black-headed Gull": "laridae",
  "Gray Heron": "ardeidae",
  "Black Kite": "accipitridae",
  "Carrion Crow": "corvidae",
  "White Wagtail": "motacillidae",
  "Oriental Greenfinch": "fringillidae",
  "Northern Shoveler": "anatidae",
  "Mallard": "anatidae",
  "Little Grebe": "podicipedidae",
  "Japanese Pygmy Woodpecker": "picidae",
  "Varied Tit": "paridae",
  "Brambling": "fringillidae",
  "Common Sandpiper": "scolopacidae",
  "Black-tailed Gull": "laridae",
  "Osprey": "pandionidae",
  "Eurasian Sparrowhawk": "accipitridae",
  "Bull-headed Shrike": "laniidae",
  "White-cheeked Starling": "sturnidae",
  "Little Egret": "ardeidae",
  "Japanese Wagtail": "motacillidae",
  "Warbling White-eye": "zosteropidae",
  "Blue Rock-Thrush": "muscicapidae",
  "Common Kingfisher": "alcedinidae",
  "Gadwall": "anatidae",
  "Common Pochard": "anatidae",
  "Tufted Duck": "anatidae",
  "Long-tailed Tit": "aegithalidae",
  "Green-winged Teal": "anatidae",
  "Common Merganser": "anatidae",
  "Peregrine Falcon": "falconidae",
  "Japanese Bush Warbler": "cettiidae",
  "Mute Swan": "anatidae",
  "Falcated Duck": "anatidae",
  "Latham's Snipe": "scolopacidae",
  "Little Eagle": "accipitridae",
  "European Goldfinch": "fringillidae",
  "New Holland Honeyeater": "meliphagidae",
  "Australian Rufous Fantail": "rhipiduridae",
  "Scaly-breasted Lorikeet": "psittaculidae",
  "Noisy Friarbird": "meliphagidae",
  "Varied Sittella": "neosittidae",
  "Wedge-tailed Eagle": "accipitridae",
  "Jacky-Winter": "petroicidae",
  "Graylag Goose": "anatidae",
  "Eastern Barn Owl": "tytonidae",
  "Australasian Gannet": "sulidae",
  "Great Crested Tern": "laridae",
  "Sooty Oystercatcher": "haematopodidae",
  "Little Friarbird": "meliphagidae",
  "Powerful Owl": "strigidae",
  "Pied Stilt": "recurvirostridae",
  "Red-necked Avocet": "recurvirostridae",
  "Bar-tailed Godwit": "scolopacidae",
  "Sharp-tailed Sandpiper": "scolopacidae",
};

function enrichBird(bird) {
  const seenDate = parseSeenDate(bird.dateFirstSeen);
  const region = getRegion(bird.location);
  const family = getFamilyForBird(bird);

  return {
    ...bird,
    seenDate,
    timestamp: seenDate ? seenDate.getTime() : 0,
    folder: folderName(bird.name),
    region,
    regionLabel: labelRegion(region),
    site: getSite(bird.location),
    primarySite: getPrimarySite(bird.location),
    familyId: family.id,
    family,
  };
}

function parseSeenDate(value) {
  const match = /^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/.exec(value || "");
  if (!match) return null;

  const day = Number(match[1]);
  const month = MONTHS[match[2]];
  const year = Number(match[3]);

  if (month === undefined) return null;
  return new Date(year, month, day);
}

function formatSeenDate(bird) {
  if (!bird.seenDate) return bird.dateFirstSeen || "Unknown date";

  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(bird.seenDate);
}

function folderName(name) {
  return name.replace(/[^a-z0-9]/gi, "_");
}

function getSite(location) {
  return cleanSiteLabel((location || "").split("|")[0]).replace(/--/g, " - ");
}

function getPrimarySite(location) {
  return cleanSiteLabel((location || "").split("|")[0].split("--")[0]) || "Unknown site";
}

function cleanSiteLabel(value) {
  const label = (value || "")
    .replace(/\s+(AU|JP)-[A-Z0-9-]+.*$/i, "")
    .trim();

  const hasJapaneseCharacters = /[\u3040-\u30ff\u3400-\u9fff]/.test(label);
  const englishMatch = hasJapaneseCharacters
    ? label.match(/\(([^()]*[A-Za-z][^()]*)\)\s*$/)
    : null;
  if (englishMatch) return englishMatch[1].trim();

  return label
    .replace(/[\u3040-\u30ff\u3400-\u9fff]/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function getRegion(location) {
  const code = ((location || "").split("|")[1] || "").trim();
  if (!code) return "other";
  if (code.startsWith("AU-")) return code.replace("AU-", "");
  if (code.startsWith("JP-")) return "Japan";
  return code;
}

function labelRegion(region) {
  if (region === "NSW") return "New South Wales";
  if (region === "QLD") return "Queensland";
  if (region === "Japan") return "Japan";
  if (region === "other") return "Other";
  return region;
}

function getFamilyForBird(bird) {
  const familyId = speciesFamilies[bird.name];
  const family = familiesById[familyId];

  if (family) return family;

  return {
    id: "unplaced",
    scientific: "Unplaced",
    common: "Needs taxonomy check",
    accent: "#8a8a8a",
    index: familyDefinitions.length,
  };
}

const PAGE_SIZE = 8;
const catalogByFolder = new Map(Object.entries(imageCatalog).map(([folder, photos]) => [folder.toLowerCase(), photos]));
const freshFilters = (sort = "dateDesc") => ({ query: "", region: "all", sort, pageIndex: 0 });
const state = {
  allBirds: [], album: [], visibleAlbum: [], filteredBirds: [], page: "life",
  filters: { life: freshFilters(), album: freshFilters("selected") },
  selectedBird: null, activeBird: null, modalItems: [], modalIndex: 0,
};
const els = {};
const filters = () => state.filters[state.page];

document.addEventListener("DOMContentLoaded", init);

function init() {
  for (const id of ["home-view", "bird-detail-page", "search-input", "sort-select", "region-filters", "bird-list", "result-count", "empty-state", "list-previous", "list-next", "list-page-label", "life-page", "album-page", "album-photos", "album-count", "album-empty", "selected-bird-button", "selected-bird-image", "selected-bird-name", "bird-name", "bird-date", "bird-location", "bird-region", "detail-group", "bird-description", "photo-count", "bird-carousel", "image-modal", "modal-img", "modal-caption", "modal-position", "announcement"]) {
    els[id] = document.getElementById(id);
  }
  state.allBirds = birds.map(enrichBird);
  state.selectedBird = state.allBirds.find((bird) => bird.name === "Rainbow Bee-eater") || state.allBirds[0];
  state.album = albumPicks.flatMap((pick) => {
    const bird = state.allBirds.find((item) => item.name === pick.name);
    const photo = bird && photosForBird(bird).find((item) => item.index === pick.photo);
    return photo ? [{ bird, photo }] : [];
  });
  bindEvents();
  renderInsights();
  syncFromHash();
}

function bindEvents() {
  document.querySelector(".skip-link").addEventListener("click", (event) => {
    event.preventDefault();
    const content = document.getElementById("content");
    content.tabIndex = -1;
    content.focus({ preventScroll: true });
    content.scrollIntoView({ behavior: "instant" });
  });
  document.querySelectorAll("[data-page]").forEach((link) => link.addEventListener("click", (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(link.dataset.page);
  }));
  els["search-input"].addEventListener("input", () => updateFilters({ query: els["search-input"].value.trim().toLowerCase() }));
  els["sort-select"].addEventListener("change", () => updateFilters({ sort: els["sort-select"].value }));
  els["list-previous"].addEventListener("click", () => changeListPage(-1));
  els["list-next"].addEventListener("click", () => changeListPage(1));
  els["selected-bird-button"].addEventListener("click", () => openBird(state.selectedBird?.id));
  document.getElementById("detail-random-bird-button").addEventListener("click", openRandomBird);
  document.getElementById("back-button").addEventListener("click", () => {
    if (history.state?.fromSite) history.back();
    else navigate(state.page);
  });
  document.getElementById("close-modal").addEventListener("click", closeModal);
  document.getElementById("modal-prev").addEventListener("click", () => shiftModal(-1));
  document.getElementById("modal-next").addEventListener("click", () => shiftModal(1));
  document.getElementById("modal-details").addEventListener("click", () => {
    const item = state.modalItems[state.modalIndex];
    closeModal();
    if (state.activeBird?.id !== item.bird.id) openBird(item.bird.id);
  });
  els["image-modal"].addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    els["modal-img"].removeAttribute("src");
    els["modal-img"].removeAttribute("srcset");
  });
  els["image-modal"].addEventListener("click", (event) => {
    if (event.target !== els["image-modal"]) return;
    const rect = els["image-modal"].getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (!els["image-modal"].open) return;
    if (event.key === "ArrowLeft") { event.preventDefault(); shiftModal(-1); }
    if (event.key === "ArrowRight") { event.preventDefault(); shiftModal(1); }
  });
  window.addEventListener("popstate", syncFromHash);
  // Native hash links and pasted deep links work alongside history navigation.
  window.addEventListener("hashchange", () => {
    const desiredBird = /^#bird-(\d+)$/.exec(location.hash);
    if (!desiredBird && !["", "#album", "#life-list", "#gallery"].includes(location.hash)) return;
    if (desiredBird && state.activeBird?.id === Number(desiredBird[1])) return;
    if (!desiredBird && !state.activeBird && state.page === (location.hash === "#album" ? "album" : "life")) return;
    syncFromHash();
  });
}

function rememberListing() {
  if (state.activeBird) return;
  history.replaceState({ page: state.page, scroll: window.scrollY, selectedId: state.selectedBird?.id, filters: state.filters }, "", location.href);
}

function navigate(page) {
  rememberListing();
  history.pushState({ page, scroll: 0, filters: state.filters }, "", page === "album" ? "#album" : "#life-list");
  showPage(page, 0, true);
}

function syncFromHash() {
  if (els["image-modal"].open) closeModal();
  const saved = history.state;
  if (saved?.filters?.life && saved?.filters?.album) state.filters = structuredClone(saved.filters);
  if (saved?.selectedId) state.selectedBird = state.allBirds.find((bird) => bird.id === saved.selectedId) || state.selectedBird;
  const match = /^#bird-(\d+)$/.exec(location.hash);
  if (match) {
    state.page = saved?.page === "album" ? "album" : "life";
    openBird(Number(match[1]), false);
  } else {
    showPage(location.hash === "#album" ? "album" : "life", saved?.scroll || 0);
  }
}

function showPage(page, scroll = 0, focus = false) {
  state.page = page === "album" ? "album" : "life";
  state.activeBird = null;
  els["home-view"].hidden = false;
  els["bird-detail-page"].hidden = true;
  els["life-page"].hidden = state.page !== "life";
  els["album-page"].hidden = state.page !== "album";
  const inAlbum = state.page === "album";
  document.querySelector(".search-control").hidden = inAlbum;
  els["region-filters"].hidden = inAlbum;
  const controls = document.querySelector(".controls");
  controls.classList.toggle("is-album", inAlbum);
  controls.setAttribute("aria-label", inAlbum ? "Photo order" : "Search and filters");
  if (inAlbum) Object.assign(filters(), { query: "", region: "all", pageIndex: 0 });
  document.querySelectorAll(".site-nav [data-page]").forEach((link) => {
    if (link.dataset.page === state.page) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  const selectedOption = els["sort-select"].querySelector('[value="selected"]');
  if (state.page === "album" && !selectedOption) {
    els["sort-select"].insertAdjacentHTML("afterbegin", '<option value="selected">Album order</option>');
  } else if (state.page === "life" && selectedOption) selectedOption.remove();
  els["search-input"].value = filters().query;
  els["sort-select"].value = filters().sort;
  renderRegionFilters();
  renderResults();
  document.title = `Oliver’s birds — ${state.page === "album" ? "Photo album" : "Life list"}`;
  if (focus) {
    const heading = document.querySelector(state.page === "album" ? "#album-page h2" : "#life-page h2");
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
  requestAnimationFrame(() => window.scrollTo({ top: scroll, behavior: "instant" }));
}

function updateFilters(patch) {
  Object.assign(filters(), patch, { pageIndex: 0 });
  const regionChanged = Object.hasOwn(patch, "region");
  if (regionChanged) {
    state.selectedBird = newestBird(state.allBirds.filter(matchesBird));
  }
  renderRegionFilters();
  renderResults();
  if (regionChanged) announce(state.selectedBird?.name || "No birds found.");
  rememberListing();
}

function newestBird(list) {
  return list.reduce((latest, bird) => {
    if (!latest || bird.timestamp > latest.timestamp || (bird.timestamp === latest.timestamp && bird.id > latest.id)) return bird;
    return latest;
  }, null);
}

function normalizeSearchText(value) {
  return value.normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/['’‘]/g, "")
    .replace(/[\p{P}\p{S}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesBird(bird) {
  const { query, region } = filters();
  const search = normalizeSearchText(query);
  const haystack = normalizeSearchText(`${bird.name} ${bird.site} ${bird.primarySite} ${bird.regionLabel} ${bird.family.scientific} ${bird.family.common}`);
  return (!search || haystack.includes(search)) && (region === "all" || bird.region === region);
}

function sortBirds(a, b) {
  const sort = filters().sort;
  if (sort === "selected") return 0;
  if (sort === "alphaAsc") return a.name.localeCompare(b.name);
  if (sort === "alphaDesc") return b.name.localeCompare(a.name);
  if (sort === "dateAsc") return a.timestamp - b.timestamp || a.name.localeCompare(b.name);
  return b.timestamp - a.timestamp || a.name.localeCompare(b.name);
}

function renderResults() {
  state.filteredBirds = state.allBirds.filter(matchesBird).sort(sortBirds);
  if (state.page === "album") {
    state.visibleAlbum = state.album.filter((item) => matchesBird(item.bird)).sort((a, b) => sortBirds(a.bird, b.bird));
    els["album-count"].textContent = `${state.visibleAlbum.length} ${state.visibleAlbum.length === 1 ? "photo" : "photos"}`;
    els["album-empty"].hidden = state.visibleAlbum.length > 0;
    els["album-photos"].replaceChildren(...state.visibleAlbum.map((item, index) => photoPrint(item, index, () => openModal(state.visibleAlbum, index))));
  } else {
    if (!state.filteredBirds.length) state.selectedBird = null;
    else if (!state.filteredBirds.some((bird) => bird.id === state.selectedBird?.id)) state.selectedBird = state.filteredBirds[0];
    renderList();
    renderSelectedBird();
  }
}

function renderList() {
  const list = state.filteredBirds;
  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  filters().pageIndex = Math.min(filters().pageIndex, pages - 1);
  const start = filters().pageIndex * PAGE_SIZE;
  const rows = list.slice(start, start + PAGE_SIZE).map((bird, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "bird-record";
    button.dataset.birdId = bird.id;
    button.setAttribute("aria-pressed", String(bird.id === state.selectedBird?.id));
    const thumb = document.createElement("span");
    thumb.className = "record-thumb";
    const photo = photosForBird(bird)[0];
    if (photo) {
      const img = document.createElement("img");
      img.alt = "";
      setPhoto(img, photo, { sizes: "50px", eager: index < 4 });
      thumb.append(img);
    } else {
      thumb.classList.add("blank-thumb");
      thumb.setAttribute("aria-hidden", "true");
      thumb.textContent = "—";
    }
    const copy = document.createElement("span");
    copy.innerHTML = `<span class="record-name">${escapeHTML(bird.name)}</span><span class="record-date">${escapeHTML(formatSeenDate(bird))}</span>`;
    button.append(thumb, copy);
    button.addEventListener("click", () => {
      state.selectedBird = bird;
      els["bird-list"].querySelectorAll(".bird-record").forEach((row) => row.setAttribute("aria-pressed", String(Number(row.dataset.birdId) === bird.id)));
      renderSelectedBird();
      announce(bird.name);
      rememberListing();
      if (window.matchMedia("(max-width: 700px)").matches) {
        els["selected-bird-button"].focus({ preventScroll: true });
        els["selected-bird-button"].scrollIntoView({ block: "center", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      }
    });
    return button;
  });
  els["bird-list"].replaceChildren(...rows);
  els["result-count"].textContent = `${list.length} species`;
  els["empty-state"].hidden = list.length > 0;
  els["list-previous"].disabled = filters().pageIndex === 0;
  els["list-next"].disabled = filters().pageIndex >= pages - 1;
  els["list-page-label"].textContent = `${filters().pageIndex + 1} / ${pages}`;
  document.querySelector(".list-pagination").hidden = pages === 1;
}

function changeListPage(direction) {
  filters().pageIndex += direction;
  renderList();
  rememberListing();
  announce(`Page ${filters().pageIndex + 1}`);
  if (window.matchMedia("(max-width: 700px)").matches) {
    els["life-page"].scrollIntoView({ behavior: "instant", block: "start" });
  }
}

function renderSelectedBird() {
  const bird = state.selectedBird;
  const button = els["selected-bird-button"];
  button.disabled = !bird;
  button.closest(".pasted-photos").hidden = !bird;
  if (!bird) return;
  const photo = photosForBird(bird)[0];
  button.setAttribute("aria-label", `Open ${bird.name}`);
  button.querySelector(".image-placeholder").hidden = Boolean(photo);
  els["selected-bird-image"].hidden = !photo;
  els["selected-bird-name"].textContent = bird.name;
  if (photo) {
    els["selected-bird-image"].alt = bird.name;
    setPhoto(els["selected-bird-image"], photo, { eager: true, priority: true });
  } else {
    els["selected-bird-image"].removeAttribute("src");
    els["selected-bird-image"].removeAttribute("srcset");
  }
}

function photosForBird(bird) {
  if (bird.noPhotos) return [];
  if (bird.images?.length) return bird.images.map((src, index) => ({ src, index: index + 1, variants: [] }));
  return imageCatalog[bird.folder] || catalogByFolder.get(bird.folder.toLowerCase()) || [];
}

function setPhoto(img, photo, { sizes = "(max-width: 700px) calc(100vw - 70px), 44vw", eager = false, priority = false } = {}) {
  img.loading = eager ? "eager" : "lazy";
  img.decoding = "async";
  img.fetchPriority = priority ? "high" : "auto";
  img.sizes = sizes;
  if (photo.width && photo.height) { img.width = photo.width; img.height = photo.height; }
  img.classList.remove("image-error");
  img.onerror = () => img.classList.add("image-error");
  const variants = photo.variants || [];
  if (variants.length) {
    img.srcset = variants.map((entry) => `${entry.src} ${entry.width}w`).join(", ");
    img.src = variants[variants.length - 1].src;
  } else {
    img.removeAttribute("srcset");
    img.src = photo.src;
  }
}

function photoPrint(item, index, onClick, showCaption = true) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "album-print print";
  button.setAttribute("aria-label", `Open ${item.bird.name} photo ${item.photo.index}`);
  const tape = document.createElement("span");
  tape.className = "tape";
  tape.setAttribute("aria-hidden", "true");
  const img = document.createElement("img");
  img.alt = item.bird.name;
  setPhoto(img, item.photo, { eager: index < 2 });
  const caption = document.createElement("span");
  caption.textContent = item.bird.name;
  button.append(tape, img);
  if (showCaption) button.append(caption);
  button.addEventListener("click", onClick);
  return button;
}

function renderRegionFilters() {
  const pool = state.page === "album" ? state.album.map((item) => item.bird) : state.allBirds;
  const regions = [...new Set(pool.map((bird) => bird.region))].sort((a, b) => labelRegion(a).localeCompare(labelRegion(b)));
  els["region-filters"].replaceChildren(...["all", ...regions].map((region) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "region-filter";
    button.textContent = region === "all" ? "All regions" : labelRegion(region);
    button.dataset.region = region;
    button.setAttribute("aria-pressed", String(filters().region === region));
    button.addEventListener("click", () => {
      updateFilters({ region });
      [...els["region-filters"].children].find((item) => item.dataset.region === region)?.focus({ preventScroll: true });
    });
    return button;
  }));
}

function renderInsights() {
  const months = new Map(), sites = new Map();
  state.allBirds.forEach((bird) => {
    if (bird.seenDate) {
      const key = `${bird.seenDate.getFullYear()}-${String(bird.seenDate.getMonth() + 1).padStart(2, "0")}`;
      months.set(key, (months.get(key) || 0) + 1);
    }
    sites.set(bird.primarySite, (sites.get(bird.primarySite) || 0) + 1);
  });
  const recent = [...months].sort(([a], [b]) => a.localeCompare(b)).slice(-12);
  const max = Math.max(...recent.map(([, count]) => count), 1);
  document.getElementById("timeline-bars").innerHTML = recent.map(([key, count]) => {
    const [year, month] = key.split("-");
    const label = new Intl.DateTimeFormat("en-AU", { month: "short" }).format(new Date(Number(year), Number(month) - 1, 1));
    return `<div class="timeline-bar" title="${label} ${year}: ${count} species"><span class="timeline-value">${count}</span><div class="timeline-fill" style="height:${Math.max(4, count / max * 85)}px"></div><span>${label}</span></div>`;
  }).join("");
  document.getElementById("site-list").innerHTML = [...sites].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([site, count]) => `<li><span>${escapeHTML(site)}</span><span>${count}</span></li>`).join("");
}

function openRandomBird() {
  const candidates = (state.page === "album" ? state.visibleAlbum.map((item) => item.bird) : state.filteredBirds).filter((bird) => bird.id !== state.activeBird?.id);
  const pool = candidates.length ? candidates : state.allBirds;
  openBird(pool[Math.floor(Math.random() * pool.length)].id);
}

function openBird(id, pushHistory = true) {
  const bird = state.allBirds.find((item) => item.id === id);
  if (!bird) { showPage("life"); return; }
  if (pushHistory) {
    const replacingDetail = Boolean(state.activeBird);
    const fromSite = replacingDetail ? Boolean(history.state?.fromSite) : true;
    rememberListing();
    history[replacingDetail ? "replaceState" : "pushState"]({ page: state.page, fromSite, filters: state.filters }, "", `#bird-${bird.id}`);
  }
  state.activeBird = bird;
  els["home-view"].hidden = true;
  els["bird-detail-page"].hidden = false;
  els["bird-name"].textContent = bird.name;
  els["bird-date"].textContent = formatSeenDate(bird);
  els["bird-location"].textContent = bird.site;
  els["bird-region"].textContent = bird.regionLabel;
  els["detail-group"].textContent = `${bird.family.scientific} — ${bird.family.common}`;
  els["bird-description"].textContent = bird.description || "";
  els["bird-description"].hidden = !bird.description;
  document.getElementById("back-button").textContent = state.page === "album" ? "Back to photo album" : "Back to life list";
  const photos = photosForBird(bird);
  els["photo-count"].textContent = `${photos.length} ${photos.length === 1 ? "photo" : "photos"}`;
  const items = photos.map((photo) => ({ bird, photo }));
  els["bird-carousel"].replaceChildren(...items.map((item, index) => photoPrint(item, index, () => openModal(items, index), false)));
  if (!photos.length) els["bird-carousel"].innerHTML = '<p class="no-photos-note">No photos yet.</p>';
  document.title = `${bird.name} — Oliver’s birds`;
  els["bird-name"].tabIndex = -1;
  els["bird-name"].focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function openModal(items, index) {
  state.modalItems = items;
  state.modalIndex = index;
  updateModal();
  document.body.classList.add("modal-open");
  els["image-modal"].showModal();
}

function closeModal() { els["image-modal"].close(); }
function shiftModal(direction) {
  state.modalIndex = (state.modalIndex + direction + state.modalItems.length) % state.modalItems.length;
  updateModal();
}
function updateModal() {
  const { bird, photo } = state.modalItems[state.modalIndex];
  const img = els["modal-img"];
  // Keep browsing light; the full-resolution file is an explicit choice.
  setPhoto(img, photo, { sizes: "(max-width: 700px) calc(100vw - 64px), 940px", eager: true, priority: true });
  img.alt = `${bird.name} photo ${photo.index}`;
  const originalLink = document.getElementById("modal-original");
  originalLink.href = photo.src;
  originalLink.setAttribute("aria-label", `Open original ${bird.name} photo ${photo.index}`);
  els["modal-caption"].textContent = bird.name;
  els["modal-position"].textContent = `${state.modalIndex + 1} / ${state.modalItems.length}`;
  document.getElementById("modal-prev").disabled = state.modalItems.length < 2;
  document.getElementById("modal-next").disabled = state.modalItems.length < 2;
}
function announce(text) { els["announcement"].textContent = text; }
function escapeHTML(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
