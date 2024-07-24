function calculateNEWS() {
    let score = 0;
    const params = ['respiratoryRate', 'bloodPressure', 'heartRate', 'consciousness', 'oxygenSaturation'];

    params.forEach(param => {
        const elements = document.getElementsByName(param);
        for (let element of elements) {
            if (element.checked) {
                score += parseInt(element.value);
                break;
            }
        }
    });

    document.getElementById('newsScore').innerText = `NEWS pisteet: ${score}`;

    let riskCategory = '';
    let action = '';
    if (score == 0) {
        riskCategory = 'Matala riski';
        action = 'Seuranta ja perushoito.';
    } else if (score <= 4) {
        riskCategory = 'Keskiriskinen';
        action = 'Lisääntynyt seuranta, arvioi potilaan tila usein.';
    } else if (score <= 6) {
        riskCategory = 'Korkea riski';
        action = 'Lääkärin arvio välittömästi, harkitse siirtoa teho-osastolle.';
    } else {
        riskCategory = 'Erittäin korkea riski';
        action = 'Välitön tehohoito ja monialainen arvio.';
    }
    
    document.getElementById('riskCategory').innerText = `Riski: ${riskCategory}\nToimenpiteet: ${action}`;
}

function showRecommendations() {
    const disease = document.getElementById('disease').value;
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';

    let recommendations = '';

    switch (disease) {
        case 'cns':
            recommendations = `
                <div class="recommendation">
                    <h2>Keskushermostoinfektiot</h2>
                    <p><strong>Bakteerimeningiitti:</strong></p>
                    <ul>
                        <li><strong>Aikaisemmin terve potilas:</strong> Keftriaksoni 2 g x 2 iv, jos resistentti pneumokokki epäiltynä, lisätään vankomysiini 1-2 g x 2 iv.</li>
                        <li><strong>Yli 50-vuotiaat/immuunipuutteiset/perussairaudet:</strong> Keftriaksoni 2 g x 2 iv + ampisilliini 2 g x 6 iv.</li>
                        <li><strong>Postoperatiivinen/trauma:</strong> Meropeneemi 2 g x 3 iv + vankomysiini 1-2 g x 2 iv.</li>
                        <li><strong>Vaikea beetalaktaamiallergia:</strong> Moksifloksasiini 400 mg x 1 iv + vankomysiini 1-2 g x 2 iv, immuunipuutteisille lisäksi atsreonaami 2 g x 4 iv.</li>
                    </ul>
                </div>`;
            break;
        case 'sepsis':
            recommendations = `
                <div class="recommendation">
                    <h2>Sepsis</h2>
                    <p><strong>Kotialkuinen sepsis:</strong></p>
                    <ul>
                        <li><strong>Ei merkittäviä perussairauksia:</strong> Kefuroksiimi 1,5 g x 3 iv.</li>
                        <li><strong>Vaikea infektio:</strong> Piperasilliini/tatsobaktaami 4 g x 3-4 iv tai meropeneemi 1 g x 3 iv.</li>
                    </ul>
                    <p><strong>Terveydenhuoltoalkuinen sepsis:</strong></p>
                    <ul>
                        <li><strong>Perusinfektio:</strong> Piperasilliini/tatsobaktaami 4 g x 3 iv.</li>
                        <li><strong>Kanyyli- tai vierasesine-infektio:</strong> Kefuroksiimi 1,5 g x 3 iv + vankomysiini 1-1.5 g x 2 iv.</li>
                        <li><strong>Leikkauspotilaat:</strong> Mahainfektiot: piperasilliini/tatsobaktaami; ortopediset infektiot: kefuroksiimi + vankomysiini.</li>
                    </ul>
                </div>`;
            break;
        case 'respiratory':
            recommendations = `
                <div class="recommendation">
                    <h2>Hengitystieinfektiot</h2>
                    <p><strong>Pneumonia:</strong></p>
                    <ul>
                        <li><strong>Yhteisöstä saatu (CAP):</strong> Amoksisilliini 500-1000 mg x 3 po, vakavissa tapauksissa kefuroksiimi 1,5 g x 3 iv.</li>
                        <li><strong>Sairaalapneumonia (HAP):</strong> Piperasilliini/tatsobaktaami 4 g x 3-4 iv tai meropeneemi 1 g x 3 iv.</li>
                        <li><strong>Aspiraatiopneumonia:</strong> Amoksisilliini-klavulaanihappo 875 mg x 2-3 po tai piperasilliini/tatsobaktaami 4 g x 3-4 iv.</li>
                    </ul>
                </div>`;
            break;
        case 'skin':
            recommendations = `
                <div class="recommendation">
                    <h2>Ihon ja pehmytkudosten infektiot</h2>
                    <p><strong>Ruusu:</strong></p>
                    <ul>
                        <li><strong>Ensisijainen hoito:</strong> Bentsyylipenisilliini 2-4 milj IU x 4 iv, lievissä tapauksissa amoksisilliini 500-1000 mg x 3 po.</li>
                        <li><strong>Allergia penisilliineille:</strong> Klindamysiini 300 mg x 3 po.</li>
                    </ul>
                    <p><strong>Paiseet ja selluliitti:</strong></p>
                    <ul>
                        <li><strong>Empiirinen hoito:</strong> Kloksasilliini 2 g x 4 iv tai kefuroksiimi 1,5 g x 3 iv.</li>
                        <li><strong>MRSA-epäily:</strong> Vankomysiini 1-2 g x 2 iv.</li>
                    </ul>
                </div>`;
            break;
        case 'uti':
            recommendations = `
                <div class="recommendation">
                    <h2>Virtsatieinfektiot</h2>
                    <p><strong>Virtsatieinfektiot (UTI):</strong></p>
                    <ul>
                        <li><strong>Ensisijainen hoito:</strong> Nitrofurantoiini 50-100 mg x 3 po, pivmesillinaami 200 mg x 3 po.</li>
                        <li><strong>Yliherkkyys ja komplisoituneet infektiot:</strong> Kefuroksiimi 500 mg x 2-3 po, siprofloksasiini 500 mg x 2 po.</li>
                    </ul>
                </div>`;
            break;
        case 'gi':
            recommendations = `
                <div class="recommendation">
                    <h2>Mahasuolikanavan infektiot</h2>
                    <p><strong>Clostridioides difficile -infektio (CDI):</strong></p>
                    <ul>
                        <li><strong>Lievä/keskivaikea:</strong> Metronidatsoli 500 mg x 3 po.</li>
                        <li><strong>Vaikea:</strong> Vankomysiini 125-250 mg x 4 po.</li>
                    </ul>
                    <p><strong>Helikobakteeri pylori:</strong></p>
                    <ul>
                        <li><strong>Kolmoishoito:</strong> Amoksisilliini 1 g x 2 po + klaritromysiini 500 mg x 2 po + PPI.</li>
                        <li><strong>Nelishoito:</strong> PPI + vismuttisubsylaatti + tetrasykliini + metronidatsoli.</li>
                    </ul>
                </div>`;
            break;
        case 'gynecological':
            recommendations = `
                <div class="recommendation">
                    <h2>Gynekologiset infektiot</h2>
                    <p><strong>PID (Pelvic Inflammatory Disease):</strong></p>
                    <ul>
                        <li><strong>Ensisijainen hoito:</strong> Doksisykliini 100 mg x 2 po + metronidatsoli 400-500 mg x 3 po.</li>
                        <li><strong>Vakava infektio:</strong> Keftriaksoni 1 g x 1 iv + doksisykliini 100 mg x 2 po + metronidatsoli 500 mg x 3 po.</li>
                    </ul>
                </div>`;
            break;
        case 'endocarditis':
            recommendations = `
                <div class="recommendation">
                    <h2>Endokardiitti</h2>
                    <p><strong>Natiivilevyä:</strong></p>
                    <ul>
                        <li><strong>Empiirinen hoito:</strong> Keftriaksoni 2 g x 2 iv + gentamysiini 3 mg/kg/vrk.</li>
                        <li><strong>MRSA-epäily:</strong> Vankomysiini 1 g x 2 iv + gentamysiini 3 mg/kg/vrk.</li>
                    </ul>
                    <p><strong>Proteesilevyä:</strong></p>
                    <ul>
                        <li><strong>Empiirinen hoito:</strong> Vankomysiini 1 g x 2 iv + rifampisiini 300-600 mg x 2-3 po + gentamysiini 3 mg/kg/vrk.</li>
                    </ul>
                </div>`;
            break;
        case 'neutropenic':
            recommendations = `
                <div class="recommendation">
                    <h2>Neutropeenisen potilaan hoito</h2>
                    <p><strong>Empiirinen hoito:</strong></p>
                    <ul>
                        <li><strong>Ensisijainen hoito:</strong> Piperasilliini/tatsobaktaami 4 g x 3 iv tai meropeneemi 1 g x 3 iv.</li>
                        <li><strong>Vakava allergia:</strong> Atsreonaami 2 g x 4 iv + vankomysiini 1-2 g x 2 iv.</li>
                    </ul>
                </div>`;
            break;
        case 'bone':
            recommendations = `
                <div class="recommendation">
                    <h2>Luu- ja nivelinfektiot</h2>
                    <p><strong>Osteomyeliitti:</strong></p>
                    <ul>
                        <li><strong>Empiirinen hoito:</strong> Kefuroksiimi 1,5 g x 3 iv + rifampisiini 300-600 mg x 2-3 po.</li>
                    </ul>
                    <p><strong>Septinen artriitti:</strong></p>
                    <ul>
                        <li><strong>Empiirinen hoito:</strong> Kefuroksiimi 1,5 g x 3 iv.</li>
                        <li><strong>MRSA-epäily:</strong> Vankomysiini 1-2 g x 2 iv.</li>
                    </ul>
                </div>`;
            break;
        case 'pump':
            recommendations = `
                <div class="recommendation">
                    <h2>Antibioottipumppujen käyttö</h2>
                    <p><strong>Käytettävät antibiootit ja annokset:</strong></p>
                    <ul>
                        <li><strong>Bentsyylipenisilliini:</strong> 10 MIU/24 h (ruusu), 20 MIU/24 h (streptokokkisepsis, lohkopneumonia).</li>
                        <li><strong>Kloksasilliini:</strong> 12 g/24 h (Staphylococcus aureuksen aiheuttamat infektiot).</li>
                        <li><strong>Piperasilliini-tatsobaktaami:</strong> 12 g/1.5 g/24 h (erittäin laajakirjoinen antibiootti).</li>
                        <li><strong>Vankomysiini:</strong> 1.5 g - 3 g/24 h (resistenttien staphylokokkien ja enterokokkien infektiot).</li>
                    </ul>
                    <p><strong>Käyttö:</strong></p>
                    <ul>
                        <li>Antibioottipumppuja ei tule valmistaa itse pitkän säilyvyyden ja puhtaan lopputuotteen takaamiseksi.</li>
                        <li>Pumppuhoito voidaan aloittaa heti tai viimeistään tunnin kuluessa siitä, kun viimeinen intermittoiva annos on annettu.</li>
                        <li>Jatkuva vankomysiini-infuusio voidaan aloittaa suoraan alkuboluksen jälkeen, mutta tämä vaatii erityistä perehtyneisyyttä.</li>
                    </ul>
                    <p><strong>Käyttö munuaisten vajaatoiminnassa:</strong></p>
                    <ul>
                        <li>Bentsyylipenisilliini: Vältettävä, jos GFR &lt;10 (10 MIU/24 h) tai GFR &lt;40 (20 MIU/24 h).</li>
                        <li>Kloksasilliini: Ei estettä käyttää munuaisten vajaatoiminnassa.</li>
                        <li>Piperasilliini-tatsobaktaami: Vältettävä, jos GFR &lt;20.</li>
                        <li>Vankomysiini: Vältettävä, jos GFR &lt;30 (1.5 g/24 h), erityistä varoivaisuutta, jos GFR &lt;50.</li>
                    </ul>
                </div>`;
            break;
        default:
            recommendations = '<p>Valitse sairausryhmä nähdäksesi suositukset.</p>';
    }

    recommendationsDiv.innerHTML = recommendations;
}
