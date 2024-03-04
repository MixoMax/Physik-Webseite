import React, { useState, useEffect } from 'react';
import './css/events.css';
import EventEntry from '../components/event-entry';

function Events() {
    const [events, setEvents] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                var url = "/search?q=" + searchQuery;
                
                if (date) {
                    url += "&date=" + date;
                }

                const response = await fetch(url, {
                });

                const data = await response.json();
                
                var do_filter = true
                var data_filtered = []
                if (do_filter) {
                    // filter out every data where img_url = "https://www.planetarium-hamburg.de/files/default/img/hamburg--logo.png"
                for (let i = 0; i< data.length; i++) {
                        if (data[i].img_url !== "https://www.planetarium-hamburg.de/files/default/img/hamburg--logo.png") {
                            data_filtered.push(data[i])
                        }
                    }
                    console.log("data_filtered", data_filtered)
                } else {
                    data_filtered = data;
                }

                setEvents(data_filtered)

            } catch (error) {
                console.error('Error fetching events:', error);
                setEvents([
                    {"title":"Die Chemie des Lebens 3D – Das Unsichtbare in uns","date":"28.02.2024","weekday":"Wed.","time":"12:45","location":"Planetarium Hamburg","description":"Was haben alle lebenden Dinge gemeinsam? Wie winzig sind Moleküle? Was passiert in unseren Zellen, nachdem wir gegessen haben? In „Chemie des Lebens – Das Unsichtbare in uns“ finden wir die Antworten auf diese und viele weitere Fragen. Die Show zeigt chemische Prozesse, die für alles Leben auf der Erde essenziell sind. Wir schrumpfen auf einige Nanometer und reisen tief in die Zellen von Pflanzen und Menschen, um die Chemie des Lebens zu erkunden. Dabei werden wir herausfinden, warum Moleküle selbst mit den leistungsstärksten Lichtmikroskopen nicht zu sehen sind und einige der Werkzeuge kennenlernen, die die Forschung heute verwendet, um mehr über unser unsichtbares Inneres zu erfahren.\n„Die Chemie des Lebens – Das Unsichtbare in uns“ macht die biomolekulare Welt durch modernste molekulare Visualisierungen konkreter und zugänglicher. Die Produktion konzentriert sich darauf, die mit dem Leben verbundenen Prozesse – Atmen, Essen und Denken – mit biochemischen Prozessen in den Zellen des Körpers zu verbinden.\nMit Hilfe von dynamischen Animationen, die auf Forschungsdaten basieren, und dem immersiven Kuppelformat erleben wir die molekulare Welt auf eine ganz neue Weise und erlangen ein tieferes Verständnis für die unsichtbare Welt, die in uns allen existiert.\nDiese Show können Sie via Audioservice auch auf Englisch hören. Live-Parts sind nicht übersetzt.\n\n","price_normal":13.5,"price_reduced":50,"duration":50,"recommended_age":12, "img": "https://via.placeholder.com/600"},
                    {"title":"Die Chemie des Lebens 3D – Das Unsichtbare in uns","date":"28.02.2024","weekday":"Wed.","time":"12:45","location":"Planetarium Hamburg","description":"Was haben alle lebenden Dinge gemeinsam? Wie winzig sind Moleküle? Was passiert in unseren Zellen, nachdem wir gegessen haben? In „Chemie des Lebens – Das Unsichtbare in uns“ finden wir die Antworten auf diese und viele weitere Fragen. Die Show zeigt chemische Prozesse, die für alles Leben auf der Erde essenziell sind. Wir schrumpfen auf einige Nanometer und reisen tief in die Zellen von Pflanzen und Menschen, um die Chemie des Lebens zu erkunden. Dabei werden wir herausfinden, warum Moleküle selbst mit den leistungsstärksten Lichtmikroskopen nicht zu sehen sind und einige der Werkzeuge kennenlernen, die die Forschung heute verwendet, um mehr über unser unsichtbares Inneres zu erfahren.\n„Die Chemie des Lebens – Das Unsichtbare in uns“ macht die biomolekulare Welt durch modernste molekulare Visualisierungen konkreter und zugänglicher. Die Produktion konzentriert sich darauf, die mit dem Leben verbundenen Prozesse – Atmen, Essen und Denken – mit biochemischen Prozessen in den Zellen des Körpers zu verbinden.\nMit Hilfe von dynamischen Animationen, die auf Forschungsdaten basieren, und dem immersiven Kuppelformat erleben wir die molekulare Welt auf eine ganz neue Weise und erlangen ein tieferes Verständnis für die unsichtbare Welt, die in uns allen existiert.\nDiese Show können Sie via Audioservice auch auf Englisch hören. Live-Parts sind nicht übersetzt.\n\n","price_normal":13.5,"price_reduced":50,"duration":50,"recommended_age":12, "img": "https://via.placeholder.com/600"},
                    {"title":"Die Chemie des Lebens 3D – Das Unsichtbare in uns","date":"28.02.2024","weekday":"Wed.","time":"12:45","location":"Planetarium Hamburg","description":"Was haben alle lebenden Dinge gemeinsam? Wie winzig sind Moleküle? Was passiert in unseren Zellen, nachdem wir gegessen haben? In „Chemie des Lebens – Das Unsichtbare in uns“ finden wir die Antworten auf diese und viele weitere Fragen. Die Show zeigt chemische Prozesse, die für alles Leben auf der Erde essenziell sind. Wir schrumpfen auf einige Nanometer und reisen tief in die Zellen von Pflanzen und Menschen, um die Chemie des Lebens zu erkunden. Dabei werden wir herausfinden, warum Moleküle selbst mit den leistungsstärksten Lichtmikroskopen nicht zu sehen sind und einige der Werkzeuge kennenlernen, die die Forschung heute verwendet, um mehr über unser unsichtbares Inneres zu erfahren.\n„Die Chemie des Lebens – Das Unsichtbare in uns“ macht die biomolekulare Welt durch modernste molekulare Visualisierungen konkreter und zugänglicher. Die Produktion konzentriert sich darauf, die mit dem Leben verbundenen Prozesse – Atmen, Essen und Denken – mit biochemischen Prozessen in den Zellen des Körpers zu verbinden.\nMit Hilfe von dynamischen Animationen, die auf Forschungsdaten basieren, und dem immersiven Kuppelformat erleben wir die molekulare Welt auf eine ganz neue Weise und erlangen ein tieferes Verständnis für die unsichtbare Welt, die in uns allen existiert.\nDiese Show können Sie via Audioservice auch auf Englisch hören. Live-Parts sind nicht übersetzt.\n\n","price_normal":13.5,"price_reduced":50,"duration":50,"recommended_age":12, "img": "https://via.placeholder.com/600"},
                    {"title":"Die Chemie des Lebens 3D – Das Unsichtbare in uns","date":"28.02.2024","weekday":"Wed.","time":"12:45","location":"Planetarium Hamburg","description":"Was haben alle lebenden Dinge gemeinsam? Wie winzig sind Moleküle? Was passiert in unseren Zellen, nachdem wir gegessen haben? In „Chemie des Lebens – Das Unsichtbare in uns“ finden wir die Antworten auf diese und viele weitere Fragen. Die Show zeigt chemische Prozesse, die für alles Leben auf der Erde essenziell sind. Wir schrumpfen auf einige Nanometer und reisen tief in die Zellen von Pflanzen und Menschen, um die Chemie des Lebens zu erkunden. Dabei werden wir herausfinden, warum Moleküle selbst mit den leistungsstärksten Lichtmikroskopen nicht zu sehen sind und einige der Werkzeuge kennenlernen, die die Forschung heute verwendet, um mehr über unser unsichtbares Inneres zu erfahren.\n„Die Chemie des Lebens – Das Unsichtbare in uns“ macht die biomolekulare Welt durch modernste molekulare Visualisierungen konkreter und zugänglicher. Die Produktion konzentriert sich darauf, die mit dem Leben verbundenen Prozesse – Atmen, Essen und Denken – mit biochemischen Prozessen in den Zellen des Körpers zu verbinden.\nMit Hilfe von dynamischen Animationen, die auf Forschungsdaten basieren, und dem immersiven Kuppelformat erleben wir die molekulare Welt auf eine ganz neue Weise und erlangen ein tieferes Verständnis für die unsichtbare Welt, die in uns allen existiert.\nDiese Show können Sie via Audioservice auch auf Englisch hören. Live-Parts sind nicht übersetzt.\n\n","price_normal":13.5,"price_reduced":50,"duration":50,"recommended_age":12, "img": "https://via.placeholder.com/600"},
                    {"title":"Die Chemie des Lebens 3D – Das Unsichtbare in uns","date":"28.02.2024","weekday":"Wed.","time":"12:45","location":"Planetarium Hamburg","description":"Was haben alle lebenden Dinge gemeinsam? Wie winzig sind Moleküle? Was passiert in unseren Zellen, nachdem wir gegessen haben? In „Chemie des Lebens – Das Unsichtbare in uns“ finden wir die Antworten auf diese und viele weitere Fragen. Die Show zeigt chemische Prozesse, die für alles Leben auf der Erde essenziell sind. Wir schrumpfen auf einige Nanometer und reisen tief in die Zellen von Pflanzen und Menschen, um die Chemie des Lebens zu erkunden. Dabei werden wir herausfinden, warum Moleküle selbst mit den leistungsstärksten Lichtmikroskopen nicht zu sehen sind und einige der Werkzeuge kennenlernen, die die Forschung heute verwendet, um mehr über unser unsichtbares Inneres zu erfahren.\n„Die Chemie des Lebens – Das Unsichtbare in uns“ macht die biomolekulare Welt durch modernste molekulare Visualisierungen konkreter und zugänglicher. Die Produktion konzentriert sich darauf, die mit dem Leben verbundenen Prozesse – Atmen, Essen und Denken – mit biochemischen Prozessen in den Zellen des Körpers zu verbinden.\nMit Hilfe von dynamischen Animationen, die auf Forschungsdaten basieren, und dem immersiven Kuppelformat erleben wir die molekulare Welt auf eine ganz neue Weise und erlangen ein tieferes Verständnis für die unsichtbare Welt, die in uns allen existiert.\nDiese Show können Sie via Audioservice auch auf Englisch hören. Live-Parts sind nicht übersetzt.\n\n","price_normal":13.5,"price_reduced":50,"duration":50,"recommended_age":12, "img": "https://via.placeholder.com/600"},
                    {"title":"Die Chemie des Lebens 3D – Das Unsichtbare in uns","date":"28.02.2024","weekday":"Wed.","time":"12:45","location":"Planetarium Hamburg","description":"Was haben alle lebenden Dinge gemeinsam? Wie winzig sind Moleküle? Was passiert in unseren Zellen, nachdem wir gegessen haben? In „Chemie des Lebens – Das Unsichtbare in uns“ finden wir die Antworten auf diese und viele weitere Fragen. Die Show zeigt chemische Prozesse, die für alles Leben auf der Erde essenziell sind. Wir schrumpfen auf einige Nanometer und reisen tief in die Zellen von Pflanzen und Menschen, um die Chemie des Lebens zu erkunden. Dabei werden wir herausfinden, warum Moleküle selbst mit den leistungsstärksten Lichtmikroskopen nicht zu sehen sind und einige der Werkzeuge kennenlernen, die die Forschung heute verwendet, um mehr über unser unsichtbares Inneres zu erfahren.\n„Die Chemie des Lebens – Das Unsichtbare in uns“ macht die biomolekulare Welt durch modernste molekulare Visualisierungen konkreter und zugänglicher. Die Produktion konzentriert sich darauf, die mit dem Leben verbundenen Prozesse – Atmen, Essen und Denken – mit biochemischen Prozessen in den Zellen des Körpers zu verbinden.\nMit Hilfe von dynamischen Animationen, die auf Forschungsdaten basieren, und dem immersiven Kuppelformat erleben wir die molekulare Welt auf eine ganz neue Weise und erlangen ein tieferes Verständnis für die unsichtbare Welt, die in uns allen existiert.\nDiese Show können Sie via Audioservice auch auf Englisch hören. Live-Parts sind nicht übersetzt.\n\n","price_normal":13.5,"price_reduced":50,"duration":50,"recommended_age":12, "img": "https://via.placeholder.com/600"},
                    {"title":"Die Chemie des Lebens 3D – Das Unsichtbare in uns","date":"28.02.2024","weekday":"Wed.","time":"12:45","location":"Planetarium Hamburg","description":"Was haben alle lebenden Dinge gemeinsam? Wie winzig sind Moleküle? Was passiert in unseren Zellen, nachdem wir gegessen haben? In „Chemie des Lebens – Das Unsichtbare in uns“ finden wir die Antworten auf diese und viele weitere Fragen. Die Show zeigt chemische Prozesse, die für alles Leben auf der Erde essenziell sind. Wir schrumpfen auf einige Nanometer und reisen tief in die Zellen von Pflanzen und Menschen, um die Chemie des Lebens zu erkunden. Dabei werden wir herausfinden, warum Moleküle selbst mit den leistungsstärksten Lichtmikroskopen nicht zu sehen sind und einige der Werkzeuge kennenlernen, die die Forschung heute verwendet, um mehr über unser unsichtbares Inneres zu erfahren.\n„Die Chemie des Lebens – Das Unsichtbare in uns“ macht die biomolekulare Welt durch modernste molekulare Visualisierungen konkreter und zugänglicher. Die Produktion konzentriert sich darauf, die mit dem Leben verbundenen Prozesse – Atmen, Essen und Denken – mit biochemischen Prozessen in den Zellen des Körpers zu verbinden.\nMit Hilfe von dynamischen Animationen, die auf Forschungsdaten basieren, und dem immersiven Kuppelformat erleben wir die molekulare Welt auf eine ganz neue Weise und erlangen ein tieferes Verständnis für die unsichtbare Welt, die in uns allen existiert.\nDiese Show können Sie via Audioservice auch auf Englisch hören. Live-Parts sind nicht übersetzt.\n\n","price_normal":13.5,"price_reduced":50,"duration":50,"recommended_age":12, "img": "https://via.placeholder.com/600"},
                    {"title":"Die Chemie des Lebens 3D – Das Unsichtbare in uns","date":"28.02.2024","weekday":"Wed.","time":"12:45","location":"Planetarium Hamburg","description":"Was haben alle lebenden Dinge gemeinsam? Wie winzig sind Moleküle? Was passiert in unseren Zellen, nachdem wir gegessen haben? In „Chemie des Lebens – Das Unsichtbare in uns“ finden wir die Antworten auf diese und viele weitere Fragen. Die Show zeigt chemische Prozesse, die für alles Leben auf der Erde essenziell sind. Wir schrumpfen auf einige Nanometer und reisen tief in die Zellen von Pflanzen und Menschen, um die Chemie des Lebens zu erkunden. Dabei werden wir herausfinden, warum Moleküle selbst mit den leistungsstärksten Lichtmikroskopen nicht zu sehen sind und einige der Werkzeuge kennenlernen, die die Forschung heute verwendet, um mehr über unser unsichtbares Inneres zu erfahren.\n„Die Chemie des Lebens – Das Unsichtbare in uns“ macht die biomolekulare Welt durch modernste molekulare Visualisierungen konkreter und zugänglicher. Die Produktion konzentriert sich darauf, die mit dem Leben verbundenen Prozesse – Atmen, Essen und Denken – mit biochemischen Prozessen in den Zellen des Körpers zu verbinden.\nMit Hilfe von dynamischen Animationen, die auf Forschungsdaten basieren, und dem immersiven Kuppelformat erleben wir die molekulare Welt auf eine ganz neue Weise und erlangen ein tieferes Verständnis für die unsichtbare Welt, die in uns allen existiert.\nDiese Show können Sie via Audioservice auch auf Englisch hören. Live-Parts sind nicht übersetzt.\n\n","price_normal":13.5,"price_reduced":50,"duration":50,"recommended_age":12, "img": "https://via.placeholder.com/600"},
                ]);
            }
        };

        fetchEvents();
    }, [searchQuery, date]);

    function get_last_update_time() {
        var url = "/last_update"
        fetch(url, {
        }).then(response => response.json())
        .then(data => {
            console.log("last_update", data)
            // {"last_scrape": YYYY-MM-DD HH:MM:SS, "last_webhook": YYYY-MM-DD HH:MM:SS}
            var last_scrape = data.last_scrape
            var last_webhook = data.last_webhook

            return "Scrape: " + last_scrape + " | Webhook: " + last_webhook
        })
    }

    return (
        <div className="events">
            <div id="events-header" class="hbox">
                <input
                    id="search-bar"
                    type="text"
                    placeholder="🔭 Search for events"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <input id="date-picker" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            {events.length === 0 ? 
                (
                    <React.Fragment>
                        <p id="no-events">Sorry, wir haben keine Events gefunden die zu deiner Suche passen.</p>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <div id="events-wrapper">
                            {events.map(event => (
                                <EventEntry key={event.id} event={event} />
                            ))}
                        </div>
                    </React.Fragment>
                )
            }
            <input type="button" value="⌅" id="back-to-top" onClick={() => window.scrollTo(0, 0)}></input>
            <div id="last-update">Last update: {get_last_update_time()}</div>
        </div>
    );
}

export default Events;
