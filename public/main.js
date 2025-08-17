let currentJoke = null;
let punchlineShown = false;

async function fetchRandomJoke() {
  const res = await fetch('/api/jokes/random');
  if (!res.ok) throw new Error('Failed to fetch joke');
  return res.json();
}

function renderSetup(j) {
  $('#setup').text(j.setup);
  $('#punchline').addClass('hidden').text(j.punchline);
  $('#meta').text(j.type ? `Type: ${j.type}` : '');
  punchlineShown = false;
}

function showPunchline() {
  $('#punchline').removeClass('hidden');
  punchlineShown = true;
}

async function nextJoke() {
  try {
    const j = await fetchRandomJoke();
    currentJoke = j;
    renderSetup(j);
  } catch (e) {
    console.error(e);
    $('#setup').text('Could not fetch a joke. Is the API running?');
    $('#punchline').addClass('hidden').text('');
    $('#meta').text('');
    punchlineShown = false;
  }
}

async function onCardClick() {
  if (!currentJoke) return;
  if (!punchlineShown) {
    showPunchline();
  } else {
    await nextJoke();
  }
}

$(async function () {
  $('#card').on('click', onCardClick);
  $('#nextBtn').on('click', async () => await nextJoke());
  $(document).on('keydown', async (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      await onCardClick();
    }
  });

  await nextJoke();
});
