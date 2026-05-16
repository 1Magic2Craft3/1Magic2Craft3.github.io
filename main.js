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

const IMAGE_EXTENSIONS = [".jpg", ".JPG", ".jpeg", ".JPEG", ".png", ".PNG"];
const DEFAULT_IMAGE_EXTENSION = ".jpg";
const MAX_DETAIL_IMAGES = 50;
const IMAGE_OBSERVER_ROOT_MARGIN = "700px 0px";
const DETAIL_IMAGE_PROBE_BATCH = 6;

const FAMILY_SOURCE = "eBird/Clements Checklist v2025, eBird Taxonomy v2025-4";

const familyDefinitions = [
  { id: "anatidae", scientific: "Anatidae", common: "Ducks, Geese, and Waterfowl", accent: "#2e6f70" },
  { id: "megapodiidae", scientific: "Megapodiidae", common: "Megapodes", accent: "#7a5a33" },
  { id: "phasianidae", scientific: "Phasianidae", common: "Pheasants, Grouse, and Allies", accent: "#8c6a43" },
  { id: "podicipedidae", scientific: "Podicipedidae", common: "Grebes", accent: "#5d7f87" },
  { id: "columbidae", scientific: "Columbidae", common: "Pigeons and Doves", accent: "#8d7595" },
  { id: "cuculidae", scientific: "Cuculidae", common: "Cuckoos", accent: "#697d3f" },
  { id: "podargidae", scientific: "Podargidae", common: "Frogmouths", accent: "#746658" },
  { id: "strigidae", scientific: "Strigidae", common: "Owls", accent: "#6f604b" },
  { id: "anhingidae", scientific: "Anhingidae", common: "Anhingas", accent: "#284b50" },
  { id: "phalacrocoracidae", scientific: "Phalacrocoracidae", common: "Cormorants and Shags", accent: "#24414d" },
  { id: "pelecanidae", scientific: "Pelecanidae", common: "Pelicans", accent: "#4d7185" },
  { id: "ardeidae", scientific: "Ardeidae", common: "Herons, Egrets, and Bitterns", accent: "#5c8e8d" },
  { id: "threskiornithidae", scientific: "Threskiornithidae", common: "Ibises and Spoonbills", accent: "#af7c47" },
  { id: "accipitridae", scientific: "Accipitridae", common: "Hawks, Eagles, and Kites", accent: "#9b4533" },
  { id: "pandionidae", scientific: "Pandionidae", common: "Osprey", accent: "#476b78" },
  { id: "falconidae", scientific: "Falconidae", common: "Falcons and Caracaras", accent: "#b55a32" },
  { id: "rallidae", scientific: "Rallidae", common: "Rails, Gallinules, and Coots", accent: "#465c64" },
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
};

const imagePathCache = new Map();
const galleryImageCache = new Map();
let lazyImageObserver = null;

const state = {
  allBirds: [],
  filteredBirds: [],
  query: "",
  region: "all",
  family: "all",
  sort: "dateDesc",
  activeBird: null,
  lastGalleryScroll: 0,
  detailReturnTarget: "gallery",
  randomDetailMode: false,
  familyAtlasOpen: false,
  modalImages: [],
  modalIndex: 0,
};

const els = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  cacheElements();
  setupLazyImageObserver();
  state.allBirds = birds.map(enrichBird);

  renderHero();
  renderInsights();
  renderRegionFilters();
  renderFamilyControls();
  bindEvents();
  applyFilters();
  syncFromHash(false);
}

function cacheElements() {
  els.homeView = document.getElementById("home-view");
  els.detailPage = document.getElementById("bird-detail-page");
  els.grid = document.getElementById("main-page");
  els.emptyState = document.getElementById("empty-state");
  els.searchInput = document.getElementById("search-input");
  els.sortSelect = document.getElementById("sort-select");
  els.resultCount = document.getElementById("result-count");
  els.gallerySummary = document.getElementById("gallery-summary");
  els.regionFilters = document.getElementById("region-filters");
  els.familySelect = document.getElementById("family-select");
  els.familyRail = document.getElementById("family-rail");
  els.familyResetButton = document.getElementById("family-reset-button");
  els.familyAtlasToggle = document.getElementById("family-atlas-toggle");
  els.familyAtlasPanel = document.getElementById("family-atlas-panel");
  els.featuredGrid = document.getElementById("featured-grid");
  els.timelineBars = document.getElementById("timeline-bars");
  els.siteList = document.getElementById("site-list");
  els.statSpecies = document.getElementById("stat-species");
  els.statRegions = document.getElementById("stat-regions");
  els.statFamilies = document.getElementById("stat-families");
  els.heroFeatureCard = document.getElementById("hero-feature-card");
  els.heroFeatureImg = document.getElementById("hero-feature-img");
  els.heroFeatureName = document.getElementById("hero-feature-name");
  els.heroFeatureMeta = document.getElementById("hero-feature-meta");
  els.randomBirdButton = document.getElementById("random-bird-button");
  els.latestBirdButton = document.getElementById("latest-bird-button");
  els.backButton = document.getElementById("back-button");
  els.detailRandomBirdButton = document.getElementById("detail-random-bird-button");
  els.detailHeroImg = document.getElementById("detail-hero-img");
  els.detailGroup = document.getElementById("detail-group");
  els.birdName = document.getElementById("bird-name");
  els.birdDescription = document.getElementById("bird-description");
  els.birdDate = document.getElementById("bird-date");
  els.birdLocation = document.getElementById("bird-location");
  els.birdRegion = document.getElementById("bird-region");
  els.photoCount = document.getElementById("photo-count");
  els.detailGallery = document.getElementById("bird-carousel");
  els.modal = document.getElementById("image-modal");
  els.modalImg = document.getElementById("modal-img");
  els.modalCaption = document.getElementById("modal-caption");
  els.closeModal = document.getElementById("close-modal");
  els.modalPrev = document.getElementById("modal-prev");
  els.modalNext = document.getElementById("modal-next");
}

function bindEvents() {
  els.searchInput.addEventListener("input", () => {
    state.query = els.searchInput.value.trim().toLowerCase();
    applyFilters();
  });

  els.sortSelect.addEventListener("change", () => {
    state.sort = els.sortSelect.value;
    applyFilters();
  });

  els.familySelect.addEventListener("change", () => {
    setFamilyFilter(els.familySelect.value);
  });

  if (els.familyResetButton) {
    els.familyResetButton.addEventListener("click", () => {
      setFamilyFilter("all");
    });
  }

  if (els.familyAtlasToggle && els.familyAtlasPanel) {
    els.familyAtlasToggle.addEventListener("click", () => toggleFamilyAtlas());
  }


  els.randomBirdButton.addEventListener("click", openRandomBird);
  if (els.detailRandomBirdButton) {
    els.detailRandomBirdButton.addEventListener("click", openRandomBird);
  }
  els.latestBirdButton.addEventListener("click", openNewestLifer);
  els.heroFeatureCard.addEventListener("click", openNewestLifer);
  els.backButton.addEventListener("click", handleDetailBack);
  els.closeModal.addEventListener("click", closeModal);
  els.modalPrev.addEventListener("click", () => shiftModal(-1));
  els.modalNext.addEventListener("click", () => shiftModal(1));

  els.modal.addEventListener("click", (event) => {
    if (event.target === els.modal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (els.modal.hidden) return;

    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowLeft") shiftModal(-1);
    if (event.key === "ArrowRight") shiftModal(1);
  });

  window.addEventListener("popstate", () => syncFromHash(false));
}


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

  const englishMatch = label.match(/\(([^()]*[A-Za-z][^()]*)\)\s*$/);
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

function getLatestBird() {
  return [...state.allBirds].sort((a, b) => b.timestamp - a.timestamp)[0];
}

function renderHero() {
  const latestBird = getLatestBird();
  const regions = new Set(state.allBirds.map((bird) => bird.region));
  const familyCount = new Set(state.allBirds.map((bird) => bird.familyId)).size;

  els.statSpecies.textContent = state.allBirds.length;
  els.statRegions.textContent = regions.size;
  els.statFamilies.textContent = familyCount;
  els.heroFeatureName.textContent = latestBird.name;
  els.heroFeatureMeta.textContent = `${latestBird.primarySite} | ${formatSeenDate(latestBird)}`;
  hydrateImage(els.heroFeatureImg, latestBird, 1, { priority: true });
}

function renderFeatured() {
  const latest = getLatestBird();
  const picks = uniqueBirds([
    latest,
    findBirdByName("Rainbow Bee-eater"),
    findBirdByName("Common Kingfisher"),
  ]);

  const labels = ["Newest lifer", "Colour hit", "Archive"];
  els.featuredGrid.innerHTML = "";

  picks.forEach((bird, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "feature-card";
    card.addEventListener("click", () => openBird(bird.id));

    const img = document.createElement("img");
    img.alt = bird.name;
    img.loading = index === 0 ? "eager" : "lazy";
    img.decoding = "async";
    if (index === 0) img.fetchPriority = "high";

    const copy = document.createElement("div");
    copy.className = "feature-card__copy";
    copy.innerHTML = `
      <span>${labels[index] || "Featured"}</span>
      <h3>${escapeHTML(bird.name)}</h3>
      <p>${escapeHTML(bird.primarySite)}</p>
    `;

    card.append(img, copy);
    els.featuredGrid.append(card);
    hydrateImage(img, bird, 1, { priority: index === 0 });
  });
}

function renderInsights() {
  renderTimeline();
  renderTopSites();
}

function renderTimeline() {
  const monthMap = new Map();

  state.allBirds.forEach((bird) => {
    if (!bird.seenDate) return;
    const key = `${bird.seenDate.getFullYear()}-${String(bird.seenDate.getMonth() + 1).padStart(2, "0")}`;
    monthMap.set(key, (monthMap.get(key) || 0) + 1);
  });

  const months = [...monthMap.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-12);

  const max = Math.max(...months.map(([, count]) => count), 1);
  els.timelineBars.innerHTML = "";

  months.forEach(([key, count]) => {
    const [year, month] = key.split("-");
    const date = new Date(Number(year), Number(month) - 1, 1);
    const label = new Intl.DateTimeFormat("en-AU", { month: "short" }).format(date);
    const bar = document.createElement("div");
    bar.className = "timeline-bar";
    bar.title = `${label} ${year}: ${count} sightings`;
    bar.innerHTML = `
      <div class="timeline-bar__fill" style="height: ${Math.max(10, (count / max) * 110)}px"></div>
      <span>${label}</span>
    `;
    els.timelineBars.append(bar);
  });
}

function renderTopSites() {
  const siteMap = new Map();

  state.allBirds.forEach((bird) => {
    siteMap.set(bird.primarySite, (siteMap.get(bird.primarySite) || 0) + 1);
  });

  const topSites = [...siteMap.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 5);

  els.siteList.innerHTML = "";
  topSites.forEach(([site, count]) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${escapeHTML(site)}</strong><span>${count}</span>`;
    els.siteList.append(item);
  });
}

function renderRegionFilters() {
  const regions = [...new Set(state.allBirds.map((bird) => bird.region))]
    .sort((a, b) => labelRegion(a).localeCompare(labelRegion(b)));

  const entries = ["all", ...regions];
  els.regionFilters.innerHTML = "";

  entries.forEach((region) => {
    const count = region === "all"
      ? state.allBirds.length
      : state.allBirds.filter((bird) => bird.region === region).length;

    const chip = createFilterChip({
      label: region === "all" ? "All regions" : labelRegion(region),
      count,
      active: state.region === region,
      onClick: () => {
        state.region = region;
        renderRegionFilters();
        applyFilters();
      },
    });

    els.regionFilters.append(chip);
  });
}

function renderFamilyControls() {
  renderFamilySelect();
  renderFamilyRail();
}

function toggleFamilyAtlas(forceOpen) {
  if (!els.familyAtlasToggle || !els.familyAtlasPanel) return;

  state.familyAtlasOpen = typeof forceOpen === "boolean" ? forceOpen : !state.familyAtlasOpen;
  els.familyAtlasPanel.hidden = !state.familyAtlasOpen;
  els.familyAtlasToggle.setAttribute("aria-expanded", String(state.familyAtlasOpen));
  els.familyAtlasToggle.textContent = state.familyAtlasOpen ? "Hide family atlas" : "Show family atlas";

  if (state.familyAtlasOpen && state.family !== "all") {
    const activeCard = els.familyRail.querySelector(`[data-family-id="${state.family}"]`);
    if (activeCard) activeCard.scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
  }
}

function renderFamilySelect() {
  const activeValue = state.family;
  const familySummaries = getFamilySummaries();

  els.familySelect.innerHTML = `<option value="all">All families</option>`;
  familySummaries.forEach((summary) => {
    const option = document.createElement("option");
    option.value = summary.id;
    option.textContent = `${summary.scientific} - ${summary.common} (${summary.count})`;
    els.familySelect.append(option);
  });

  els.familySelect.value = activeValue;
}

function renderFamilyRail() {
  els.familyRail.innerHTML = "";

  getFamilySummaries().forEach((summary) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `family-card${state.family === summary.id ? " is-active" : ""}`;
    card.dataset.familyId = summary.id;
    card.style.setProperty("--family-accent", summary.accent);
    card.setAttribute("aria-label", `Filter by ${summary.scientific}`);
    card.innerHTML = `
      <div class="family-card__top">
        <span class="family-card__latin">${escapeHTML(summary.scientific)}</span>
        <span class="family-card__count">${summary.count}</span>
      </div>
      <h3>${escapeHTML(summary.common)}</h3>
      <p>${escapeHTML(summary.examples.join(", "))}</p>
    `;
    card.addEventListener("click", () => setFamilyFilter(summary.id));
    els.familyRail.append(card);
  });
}

function getFamilySummaries() {
  return familyDefinitions
    .map((family) => {
      const members = state.allBirds
        .filter((bird) => bird.familyId === family.id)
        .sort((a, b) => b.timestamp - a.timestamp || a.name.localeCompare(b.name));

      return {
        ...family,
        count: members.length,
        examples: members.slice(0, 3).map((bird) => bird.name),
      };
    })
    .filter((family) => family.count > 0)
    .sort((a, b) => a.index - b.index);
}

function setFamilyFilter(familyId) {
  state.family = familiesById[familyId] ? familyId : "all";
  els.familySelect.value = state.family;
  renderFamilyRail();
  if (state.family !== "all" && state.familyAtlasOpen) {
    const activeCard = els.familyRail.querySelector(`[data-family-id="${state.family}"]`);
    if (activeCard) activeCard.scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
  }
  applyFilters();
}

function createFilterChip({ label, count, active, onClick }) {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = `filter-chip${active ? " is-active" : ""}`;
  chip.textContent = `${label} ${count}`;
  chip.addEventListener("click", onClick);
  return chip;
}

function applyFilters() {
  const query = state.query;

  const results = state.allBirds.filter((bird) => {
    const haystack = `${bird.name} ${bird.site} ${bird.primarySite} ${bird.regionLabel} ${bird.family.scientific} ${bird.family.common}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesRegion = state.region === "all" || bird.region === state.region;
    const matchesFamily = state.family === "all" || bird.familyId === state.family;
    return matchesQuery && matchesRegion && matchesFamily;
  });

  results.sort(sortBirds);
  state.filteredBirds = results;
  renderGallery(results);
  updateGallerySummary(results);
}

function sortBirds(a, b) {
  if (state.sort === "alphaAsc") return a.name.localeCompare(b.name);
  if (state.sort === "alphaDesc") return b.name.localeCompare(a.name);
  if (state.sort === "dateAsc") return a.timestamp - b.timestamp || a.name.localeCompare(b.name);
  return b.timestamp - a.timestamp || a.name.localeCompare(b.name);
}

function renderGallery(list) {
  els.grid.innerHTML = "";
  els.emptyState.classList.toggle("hidden", list.length > 0);

  const fragment = document.createDocumentFragment();
  list.forEach((bird, index) => fragment.append(createBirdCard(bird, index)));
  els.grid.append(fragment);
}

function createBirdCard(bird, index) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "bird-card";
  card.setAttribute("aria-label", `Open ${bird.name}`);
  card.addEventListener("click", () => openBird(bird.id));

  const imageWrap = document.createElement("div");
  imageWrap.className = "bird-card__image";

  const img = document.createElement("img");
  img.alt = bird.name;
  img.loading = index < 8 ? "eager" : "lazy";
  img.decoding = "async";
  img.fetchPriority = index < 4 ? "high" : "low";
  imageWrap.append(img);

  const body = document.createElement("div");
  body.className = "bird-card__body";
  body.innerHTML = `
    <div class="bird-card__kicker">
      <span>${escapeHTML(formatSeenDate(bird))}</span>
      <span>${escapeHTML(bird.region)}</span>
    </div>
    <h3>${escapeHTML(bird.name)}</h3>
    <p class="bird-card__site">${escapeHTML(bird.primarySite)}</p>
  `;

  card.append(imageWrap, body);
  hydrateImage(img, bird, 1, { priority: index < 8 });
  return card;
}

function updateGallerySummary(results) {
  const birdWord = results.length === 1 ? "bird" : "birds";
  els.resultCount.textContent = `${results.length} ${birdWord}`;

  const parts = [];
  if (state.region !== "all") parts.push(labelRegion(state.region));
  if (state.family !== "all") {
    const family = familiesById[state.family];
    if (family) parts.push(`${family.scientific} (${family.common})`);
  }
  if (state.query) parts.push(`matching "${state.query}"`);

  els.gallerySummary.textContent = parts.length
    ? `Showing ${parts.join(", ")}.`
    : "";
}

function openRandomBird() {
  const sourcePool = state.filteredBirds.length ? state.filteredBirds : state.allBirds;
  const pool = state.activeBird && sourcePool.length > 1
    ? sourcePool.filter((bird) => bird.id !== state.activeBird.id)
    : sourcePool;
  const bird = pool[Math.floor(Math.random() * pool.length)];
  openBird(bird.id, true, {
    returnTarget: "hero",
    returnScroll: 0,
    randomDetailMode: true,
    detailScroll: "balanced",
  });
}

function openNewestLifer() {
  const latestBird = getLatestBird();
  if (!latestBird) return;

  openBird(latestBird.id, true, {
    returnTarget: "hero",
    returnScroll: 0,
    detailScroll: "balanced",
  });
}

async function openBird(id, pushHistory = true, options = {}) {
  const bird = state.allBirds.find((item) => item.id === id);
  if (!bird) return;

  state.activeBird = bird;
  const currentScroll = window.scrollY || document.documentElement.scrollTop || 0;
  state.detailReturnTarget = options.returnTarget === "hero" ? "hero" : "gallery";
  state.randomDetailMode = Boolean(options.randomDetailMode);
  const useBalancedDetailScroll = options.detailScroll === "balanced";
  state.lastGalleryScroll = Number.isFinite(options.returnScroll) ? options.returnScroll : currentScroll;
  els.homeView.classList.add("hidden");
  els.detailPage.classList.remove("hidden");
  document.body.classList.add("showing-detail");
  updateDetailActions();
  resetDetailScroll(useBalancedDetailScroll);

  els.detailGroup.textContent = `${bird.family.scientific} | ${bird.family.common}`;
  els.birdName.textContent = bird.name;
  els.birdDescription.textContent = bird.description || `${bird.name} sits in ${bird.family.scientific} (${bird.family.common}) and was first logged at ${bird.site}.`;
  els.birdDate.textContent = formatSeenDate(bird);
  els.birdLocation.textContent = bird.site;
  els.birdRegion.textContent = bird.regionLabel;
  els.photoCount.textContent = "Loading photos";
  els.detailGallery.innerHTML = `<p class="loading-note">Loading photos...</p>`;

  hydrateImage(els.detailHeroImg, bird, 1, { priority: true });

  if (pushHistory) {
    history.pushState({ birdId: id }, "", `#bird-${id}`);
  }

  resetDetailScroll(useBalancedDetailScroll);

  const images = await collectBirdImages(bird);
  if (!state.activeBird || state.activeBird.id !== bird.id) return;

  renderDetailGallery(bird, images);
  if (useBalancedDetailScroll) {
    resetDetailScroll(true);
  }
}

function renderDetailGallery(bird, images) {
  els.detailGallery.innerHTML = "";
  els.photoCount.textContent = images.length === 1 ? "1 photo" : `${images.length} photos`;

  if (!images.length) {
    els.detailGallery.innerHTML = `<p class="loading-note">No photos found for this species yet.</p>`;
    return;
  }

  images.forEach((src, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `Open ${bird.name} photo ${index + 1}`);

    const img = document.createElement("img");
    img.src = src;
    img.alt = `${bird.name} photo ${index + 1}`;
    img.loading = index < 6 ? "eager" : "lazy";
    img.decoding = "async";
    img.fetchPriority = index < 3 ? "high" : "low";

    button.append(img);
    button.addEventListener("click", () => openModal(images, index, bird));
    els.detailGallery.append(button);
  });
}

function handleDetailBack() {
  if (state.detailReturnTarget === "hero") {
    showHomeHero(true);
    return;
  }

  showGallery(true);
}

function updateDetailActions() {
  const returnsToHero = state.detailReturnTarget === "hero";
  const isRandomMode = returnsToHero && state.randomDetailMode;

  if (els.backButton) {
    els.backButton.textContent = returnsToHero ? "\u2190 Back" : "\u2190 Gallery";
  }

  if (els.detailRandomBirdButton) {
    els.detailRandomBirdButton.classList.toggle("hidden", !isRandomMode);
  }
}

function showHomeHero(pushHistory = true) {
  state.activeBird = null;
  state.detailReturnTarget = "gallery";
  state.randomDetailMode = false;
  els.detailPage.classList.add("hidden");
  els.homeView.classList.remove("hidden");
  document.body.classList.remove("showing-detail");
  updateDetailActions();

  if (pushHistory) {
    history.pushState({}, "", `${window.location.pathname}${window.location.search}`);
  }

  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  });
}

function showGallery(pushHistory = true) {
  state.activeBird = null;
  state.detailReturnTarget = "gallery";
  state.randomDetailMode = false;
  els.detailPage.classList.add("hidden");
  els.homeView.classList.remove("hidden");
  document.body.classList.remove("showing-detail");
  updateDetailActions();

  if (pushHistory) {
    history.pushState({}, "", "#gallery");
  }

  requestAnimationFrame(() => {
    const targetScroll = Number.isFinite(state.lastGalleryScroll) ? state.lastGalleryScroll : 0;
    window.scrollTo({ top: targetScroll, left: 0, behavior: "auto" });

    requestAnimationFrame(() => {
      window.scrollTo({ top: targetScroll, left: 0, behavior: "auto" });
    });
  });
}

function syncFromHash(pushHistory) {
  const match = /^#bird-(\d+)$/.exec(window.location.hash);
  if (match) {
    openBird(Number(match[1]), pushHistory);
    return;
  }

  if (!els.detailPage.classList.contains("hidden")) {
    showGallery(pushHistory);
  }
}

function openModal(images, index, bird) {
  state.modalImages = images;
  state.modalIndex = index;
  state.modalBird = bird;
  updateModal();
  els.modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  els.modal.hidden = true;
  document.body.classList.remove("modal-open");
  els.modalImg.src = "";
}

function shiftModal(direction) {
  if (!state.modalImages.length) return;
  state.modalIndex = (state.modalIndex + direction + state.modalImages.length) % state.modalImages.length;
  updateModal();
}

function updateModal() {
  const src = state.modalImages[state.modalIndex];
  const bird = state.modalBird;
  els.modalImg.src = src;
  els.modalImg.alt = `${bird.name} photo ${state.modalIndex + 1}`;
  els.modalCaption.textContent = `${bird.name} | ${state.modalIndex + 1} of ${state.modalImages.length}`;
}

function setupLazyImageObserver() {
  if (!("IntersectionObserver" in window)) return;

  lazyImageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      observer.unobserve(img);
      hydrateImageNow(img, img.__bird, img.__imageIndex);
    });
  }, { rootMargin: IMAGE_OBSERVER_ROOT_MARGIN });
}

function getGalleryScrollPosition() {
  const gallery = document.getElementById("gallery");
  if (!gallery) return window.scrollY || document.documentElement.scrollTop || 0;

  const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
  return Math.max(0, Math.round(gallery.getBoundingClientRect().top + scrollTop));
}

function resetDetailScroll(useBalancedPosition = false) {
  const getTop = () => useBalancedPosition ? getBalancedDetailScrollTop() : 0;
  setPageScroll(getTop());

  requestAnimationFrame(() => {
    setPageScroll(getTop());

    requestAnimationFrame(() => {
      setPageScroll(getTop());
    });
  });

  if (useBalancedPosition) {
    window.setTimeout(() => setPageScroll(getTop()), 80);
  }
}

function getBalancedDetailScrollTop() {
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 800;
  const currentScroll = window.scrollY || document.documentElement.scrollTop || 0;
  const detailBody = document.querySelector(".detail-body");

  let targetScroll = 0;

  if (detailBody) {
    const detailBodyTop = detailBody.getBoundingClientRect().top + currentScroll;
    const preferredBodyTop = Math.min(560, Math.max(430, viewportHeight * 0.64));
    targetScroll = detailBodyTop - preferredBodyTop;
  }

  if (els.photoCount) {
    const photoCountBottom = els.photoCount.getBoundingClientRect().bottom + currentScroll;
    const bottomPadding = 72;
    targetScroll = Math.max(targetScroll, photoCountBottom - (viewportHeight - bottomPadding));
  }

  return Math.max(0, Math.round(targetScroll));
}

function setPageScroll(top) {
  document.documentElement.scrollTop = top;
  document.body.scrollTop = top;
  window.scrollTo({ top, left: 0, behavior: "auto" });
}

function hydrateImage(img, bird, index, options = {}) {
  if (!img || !bird) return;

  img.__bird = bird;
  img.__imageIndex = index;

  const shouldLoadNow = options.priority || img.loading === "eager" || !lazyImageObserver;
  if (shouldLoadNow) {
    hydrateImageNow(img, bird, index);
    return;
  }

  lazyImageObserver.observe(img);
}

function hydrateImageNow(img, bird, index) {
  if (!img || !bird) return;

  resolveImagePath(bird, index).then((src) => {
    if (!img.isConnected || !src) return;

    img.onload = () => img.classList.add("is-loaded");
    img.onerror = () => {
      img.removeAttribute("src");
      img.classList.remove("is-loaded");
    };
    img.src = src;
  });
}

function resolveImagePath(bird, index) {
  const directImage = Array.isArray(bird.images) ? bird.images[index - 1] : null;
  if (directImage) return Promise.resolve(directImage);

  const key = `${bird.id}:${index}`;
  if (imagePathCache.has(key)) return imagePathCache.get(key);

  const defaultCandidate = `Images/${bird.folder}/${index}${DEFAULT_IMAGE_EXTENSION}`;
  const fallbackCandidates = IMAGE_EXTENSIONS
    .filter((extension) => extension !== DEFAULT_IMAGE_EXTENSION)
    .map((extension) => `Images/${bird.folder}/${index}${extension}`);
  const candidates = [defaultCandidate, ...fallbackCandidates];

  const promise = new Promise((resolve) => {
    tryImageCandidate(candidates, 0, resolve);
  });

  imagePathCache.set(key, promise);
  return promise;
}

function tryImageCandidate(candidates, index, resolve) {
  if (index >= candidates.length) {
    resolve(null);
    return;
  }

  const tester = new Image();
  tester.onload = () => resolve(candidates[index]);
  tester.onerror = () => tryImageCandidate(candidates, index + 1, resolve);
  tester.src = candidates[index];
}

async function collectBirdImages(bird) {
  if (galleryImageCache.has(bird.id)) return galleryImageCache.get(bird.id);

  if (Array.isArray(bird.images) && bird.images.length) {
    galleryImageCache.set(bird.id, bird.images);
    return bird.images;
  }

  const images = [];
  let misses = 0;

  for (let start = 1; start <= MAX_DETAIL_IMAGES; start += DETAIL_IMAGE_PROBE_BATCH) {
    const batch = Array.from(
      { length: Math.min(DETAIL_IMAGE_PROBE_BATCH, MAX_DETAIL_IMAGES - start + 1) },
      (_, offset) => start + offset
    );
    const sources = await Promise.all(batch.map((imageIndex) => resolveImagePath(bird, imageIndex)));

    for (const src of sources) {
      if (src) {
        images.push(src);
        misses = 0;
      } else {
        misses += 1;
        if (images.length && misses >= 4) {
          galleryImageCache.set(bird.id, images);
          return images;
        }
      }
    }

    if (!images.length && misses >= DETAIL_IMAGE_PROBE_BATCH) break;
  }

  galleryImageCache.set(bird.id, images);
  return images;
}

function findBirdByName(name) {
  return state.allBirds.find((bird) => bird.name === name);
}

function uniqueBirds(list) {
  const seen = new Set();
  return list.filter((bird) => {
    if (!bird || seen.has(bird.id)) return false;
    seen.add(bird.id);
    return true;
  });
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
