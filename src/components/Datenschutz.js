import React, { useState } from 'react';
import KontaktForm from './KontaktForm.js'; // Pfad anpassen
import './css/agb.css'; // Stellen Sie sicher, dass Sie diese CSS-Datei für das Styling erstellen
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../effekts/LanguageProvider.js';

// Inhalte für jede Sprache


const Datenschutz = () => {
  const { language } = useLanguage();
  const content = {
    de: {
      heading:"Allgemeine Geschäftsbedingungen (AGB)",
      telefon: 'Telefon',
      email: 'E-Mail',
      anschrift: 'Anschrift',
      linkedin: 'LinkedIn',
      phone: '+43 664 426 85 08',
      emailAddress: 'office@shapingbusiness.at',
      address: 'Musterstraße 1, 12345 Musterstadt',
      linkedinName: 'Angelika Kiessling-Kranzelmayer',
	 
    },
    en: {
      heading:"GENERAL TERMS AND CONDITIONS (GTC)",
      telefon: 'Phone',
      email: 'Email',
      anschrift: 'Address',
      linkedin: 'LinkedIn',
      phone: '+43 664 426 85 08',
      emailAddress: 'office@shapingbusiness.at',
      address: 'Sample Street 1, 12345 Sample City',
      linkedinName: 'Angelika Kiessling-Kranzelmayer',
    }
  };
  
  // Funktion zum Ändern der Sprache

  return (
    <div>
		 
    <div className='box'>
	<div >
      <h3>Erkl&auml;rung zur Informationspflicht</h3>
      <br />
      <p align="center"><strong>Datenschutzerkl&auml;rung</strong></p>
      <p align="center">&nbsp;</p>
      <p>In folgender Datenschutzerkl&auml;rung informieren wir Sie &uuml;ber die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Webseite. Wir erheben und verarbeiten personenbezogene Daten nur auf Grundlage der gesetzlichen Bestimmungen (Datenschutzgrundverordnung, Telekommunikationsgesetz 2003).</p>
      <p>Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.</p>
      <p>&nbsp;</p>
      <h2><strong>Kontakt mit uns</strong></h2>
      <p>Wenn Sie uns, entweder &uuml;ber unser Kontaktformular auf unserer Webseite, oder per Email kontaktieren, dann werden die von Ihnen an uns &uuml;bermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder f&uuml;r den Fall von weiteren Anschlussfragen f&uuml;r sechs Monate bei uns gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe Ihrer &uuml;bermittelten Daten.</p>
      <p>&nbsp;</p>
      <h2><strong>Cookies</strong></h2>
      <p>Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endger&auml;t abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese l&ouml;schen. Sie erm&ouml;glichen es uns, Ihren Browser beim n&auml;chsten Besuch wiederzuerkennen. Wenn Sie dies nicht w&uuml;nschen, so k&ouml;nnen Sie Ihren Browser so einrichten, dass er Sie &uuml;ber das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalit&auml;t unserer Website eingeschr&auml;nkt sein.</p>
      <p>&nbsp;</p>
      <h2><strong>Google Fonts</strong></h2>
      <p>Unsere Website verwendet Schriftarten von &bdquo;Google Fonts&ldquo;. Der Dienstanbieter dieser Funktion ist:</p>
      <ul>
      <li>Google Ireland Limited Gordon House, Barrow Street Dublin 4. Ireland</li>
      </ul>
      <p>Tel: +353 1 543 1000</p>
      <p>Beim Aufrufen dieser Webseite l&auml;dt Ihr Browser Schriftarten und speichert diese in den Cache. Da Sie, als Besucher der Webseite, Daten des Dienstanbieters empfangen kann Google unter Umst&auml;nden Cookies auf Ihrem Rechner setzen oder analysieren.</p>
      <p>Die Nutzung von &bdquo;Google-Fonts&ldquo; dient der Optimierung unserer Dienstleistung und der einheitlichen Darstellung von Inhalten. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.</p>
      <p>Weitere Informationen zu Google Fonts erhalten Sie unter folgendem Link:</p>
      <ul>
      <li><a href="https://developers.google.com/fonts/faq"> https://developers.google.com/fonts/faq </a></li>
      </ul>
      <p>Weitere Informationen &uuml;ber den Umgang mit Nutzerdaten von Google k&ouml;nnen Sie der Datenschutzerkl&auml;rung entnehmen:</p>
      <ul>
      <li><a href="https://policies.google.com/privacy?hl=de"> https://policies.google.com/privacy?hl=de </a> .</li>
      </ul>
      <p>Google verarbeitet die Daten auch in den USA, hat sich jedoch dem <br /> EU-US Privacy-Shield unterworfen.</p>
      <p><a href="https://www.privacyshield.gov/EU-US-Framework"> https://www.privacyshield.gov/EU-US-Framework </a></p>
      <p>&nbsp;</p>
      <h2><strong>Server-Log Files</strong></h2>
      <p>Diese Webseite und der damit verbundene Provider erhebt im Zuge der Webseitennutzung automatisch Informationen im Rahmen sogenannter &bdquo;Server-Log Files&ldquo;. Dies betrifft insbesondere:</p>
      <ul>
      <li>IP-Adresse oder Hostname</li>
      <li>den verwendeten Browser</li>
      <li>Aufenthaltsdauer auf der Webseite sowie Datum und Uhrzeit</li>
      <li>aufgerufene Seiten der Webseite</li>
      <li>Spracheinstellungen und Betriebssystem</li>
      <li>&bdquo;Leaving-Page&ldquo; (auf welcher URL hat der Benutzer die Webseite verlassen)</li>
      <li>ISP (Internet Service Provider)</li>
      </ul>
      <p>Diese erhobenen Informationen werden nicht personenbezogen verarbeitet oder mit personenbezogenen Daten in Verbindung gebracht.</p>
      <p>Der Webseitenbetreiber beh&auml;lt es sich vor, im Falle von Bekanntwerden rechtswidriger T&auml;tigkeiten, diese Daten auszuwerten oder zu &uuml;berpr&uuml;fen.</p>
      <p>&nbsp;</p>
      <h2><strong>Ihre Rechte als Betroffener</strong></h2>
      <p>Sie als Betroffener haben bez&uuml;glich Ihrer Daten, welche bei uns gespeichert sind grunds&auml;tzlich ein Recht auf:</p>
      <ul>
      <li>Auskunft</li>
      <li>L&ouml;schung der Daten</li>
      <li>Berichtigung der Daten</li>
      <li>&Uuml;bertragbarkeit der Daten</li>
      <li>Wiederruf und Widerspruch zur Datenverarbeitung</li>
      <li>Einschr&auml;nkung</li>
      </ul>
      <p>Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verst&ouml;&szlig;e gegen das Datenschutzrecht passiert sind, so haben Sie die M&ouml;glichkeit sich bei uns (office@angelikakiessling.com) oder der Datenschutzbeh&ouml;rde zu beschweren.</p>
      <p>&nbsp;</p>
      <h5>Sie erreichen uns unter folgenden Kontaktdaten:</h5>
      <p><strong>Webseitenbetreiber:</strong> Mag. Angelika Kiessling-Kranzelmayer<br /> <strong>Telefonnummer:</strong> +436644268508<br /> <strong>Email:</strong> office@angelikakiessling.com</p>
      <p>Quelle: <strong><a href="https://www.fairesrecht.at/">fairesRecht.at</a></strong></p>

</div>
<br></br>
<div>

  <h1 class="adsimple-112763364">Datenschutzerklärung</h1>
<h2 id="einleitung-ueberblick" class="adsimple-112763364">Einleitung und Überblick</h2>
<p>Wir haben diese Datenschutzerklärung (Fassung 16.04.2024-112763364) verfasst, um Ihnen gemäß der Vorgaben der <a class="adsimple-112763364" href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=112763364#d1e2269-1-1" target="_blank" rel="noopener">Datenschutz-Grundverordnung (EU) 2016/679</a> und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche &#8211; und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) &#8211; verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.<br />
<strong class="adsimple-112763364">Kurz gesagt:</strong> Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.</p>
<p>Datenschutzerklärungen klingen für gewöhnlich sehr technisch und verwenden juristische Fachbegriffe. Diese Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie möglich beschreiben. Soweit es der Transparenz förderlich ist, werden technische <strong class="adsimple-112763364">Begriffe leserfreundlich erklärt</strong>, Links zu weiterführenden Informationen geboten und <strong class="adsimple-112763364">Grafiken</strong> zum Einsatz gebracht. Wir informieren damit in klarer und einfacher Sprache, dass wir im Rahmen unserer Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine entsprechende gesetzliche Grundlage gegeben ist. Das ist sicher nicht möglich, wenn man möglichst knappe, unklare und juristisch-technische Erklärungen abgibt, so wie sie im Internet oft Standard sind, wenn es um Datenschutz geht. Ich hoffe, Sie finden die folgenden Erläuterungen interessant und informativ und vielleicht ist die eine oder andere Information dabei, die Sie noch nicht kannten.<br />
Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw. im Impressum genannte verantwortliche Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere Informationen auf Drittseiten anzusehen. Unsere Kontaktdaten finden Sie selbstverständlich auch im Impressum.</p>
<h2 id="anwendungsbereich" class="adsimple-112763364">Anwendungsbereich</h2>
<p>Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person. Die Verarbeitung personenbezogener Daten sorgt dafür, dass wir unsere Dienstleistungen und Produkte anbieten und abrechnen können, sei es online oder offline. Der Anwendungsbereich dieser Datenschutzerklärung umfasst:</p>
<ul class="adsimple-112763364">
<li class="adsimple-112763364">alle Onlineauftritte (Websites, Onlineshops), die wir betreiben</li>
<li class="adsimple-112763364">Social Media Auftritte und E-Mail-Kommunikation</li>
<li class="adsimple-112763364">mobile Apps für Smartphones und andere Geräte</li>
</ul>
<p>
<strong class="adsimple-112763364">Kurz gesagt:</strong> Die Datenschutzerklärung gilt für alle Bereiche, in denen personenbezogene Daten im Unternehmen über die genannten Kanäle strukturiert verarbeitet werden. Sollten wir außerhalb dieser Kanäle mit Ihnen in Rechtsbeziehungen eintreten, werden wir Sie gegebenenfalls gesondert informieren.</p>
<h2 id="rechtsgrundlagen" class="adsimple-112763364">Rechtsgrundlagen</h2>
<p>In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen Grundsätzen und Vorschriften, also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns ermöglichen, personenbezogene Daten zu verarbeiten.<br />
Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 27. April 2016. Diese Datenschutz-Grundverordnung der EU können Sie selbstverständlich online auf EUR-Lex, dem Zugang zum EU-Recht, unter <a class="adsimple-112763364" href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679">https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679</a> nachlesen.</p>
<p>Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:</p>
<ol>
<li class="adsimple-112763364">
<strong class="adsimple-112763364">Einwilligung</strong> (Artikel 6 Absatz 1 lit. a DSGVO): Sie haben uns Ihre Einwilligung gegeben, Daten zu einem bestimmten Zweck zu verarbeiten. Ein Beispiel wäre die Speicherung Ihrer eingegebenen Daten eines Kontaktformulars.</li>
<li class="adsimple-112763364">
<strong class="adsimple-112763364">Vertrag</strong> (Artikel 6 Absatz 1 lit. b DSGVO): Um einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu erfüllen, verarbeiten wir Ihre Daten. Wenn wir zum Beispiel einen Kaufvertrag mit Ihnen abschließen, benötigen wir vorab personenbezogene Informationen.</li>
<li class="adsimple-112763364">
<strong class="adsimple-112763364">Rechtliche Verpflichtung</strong> (Artikel 6 Absatz 1 lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind wir gesetzlich verpflichtet Rechnungen für die Buchhaltung aufzuheben. Diese enthalten in der Regel personenbezogene Daten.</li>
<li class="adsimple-112763364">
<strong class="adsimple-112763364">Berechtigte Interessen</strong> (Artikel 6 Absatz 1 lit. f DSGVO): Im Falle berechtigter Interessen, die Ihre Grundrechte nicht einschränken, behalten wir uns die Verarbeitung personenbezogener Daten vor. Wir müssen zum Beispiel gewisse Daten verarbeiten, um unsere Website sicher und wirtschaftlich effizient betreiben zu können. Diese Verarbeitung ist somit ein berechtigtes Interesse.</li>
</ol>
<p>Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im öffentlichen Interesse und Ausübung öffentlicher Gewalt sowie dem Schutz lebenswichtiger Interessen treten bei uns in der Regel nicht auf. Soweit eine solche Rechtsgrundlage doch einschlägig sein sollte, wird diese an der entsprechenden Stelle ausgewiesen.</p>
<p>Zusätzlich zu der EU-Verordnung gelten auch noch nationale Gesetze:</p>
<ul class="adsimple-112763364">
<li class="adsimple-112763364">In <strong class="adsimple-112763364">Österreich</strong> ist dies das Bundesgesetz zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten (<strong class="adsimple-112763364">Datenschutzgesetz</strong>), kurz <strong class="adsimple-112763364">DSG</strong>.</li>
<li class="adsimple-112763364">In <strong class="adsimple-112763364">Deutschland</strong> gilt das <strong class="adsimple-112763364">Bundesdatenschutzgesetz</strong>, kurz<strong class="adsimple-112763364"> BDSG</strong>.</li>
</ul>
<p>Sofern weitere regionale oder nationale Gesetze zur Anwendung kommen, informieren wir Sie in den folgenden Abschnitten darüber.</p>
<h2 id="kontaktdaten-verantwortliche" class="adsimple-112763364">Kontaktdaten des Verantwortlichen</h2>
<p>Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben, finden Sie nachfolgend die Kontaktdaten der verantwortlichen Person bzw. Stelle:<br />
<span class="adsimple-112763364" style={{fontWeight: 400}}>Musterfirma GmbH<br />
Mag. Angelika Kiessling-Kranzelmayer<br />
Leopold Gattringer-Straße 25, 2345 Brunn am Gebirge</span>
<br />
<span style={{fontWeight: 400}}>Vertretungsberechtigt: Mag. Angelika Kiessling-Kranzelmaye</span>
<br />
E-Mail: <a href="mailto:office@angelikakiessling.com">office@angelikakiessling.com</a>
<br />
Telefon: <a href="tel:+436644268508">+436644268508</a>
<br />
Impressum: <a href="https://www.angelikakiessling.com/impressum/">https://www.angelikakiessling.com/impressum/</a>
</p>
<h2 id="speicherdauer" class="adsimple-112763364">Speicherdauer</h2>
<p>Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns. Das bedeutet, dass wir personenbezogene Daten löschen, sobald der Grund für die Datenverarbeitung nicht mehr vorhanden ist. In einigen Fällen sind wir gesetzlich dazu verpflichtet, bestimmte Daten auch nach Wegfall des ursprüngliches Zwecks zu speichern, zum Beispiel zu Zwecken der Buchführung.</p>
<p>Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung widerrufen, werden die Daten so rasch wie möglich und soweit keine Pflicht zur Speicherung besteht, gelöscht.</p>
<p>Über die konkrete Dauer der jeweiligen Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben.</p>
<h2 id="rechte-dsgvo" class="adsimple-112763364">Rechte laut Datenschutz-Grundverordnung</h2>
<p>Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden Rechte, die Ihnen zustehen, damit es zu einer fairen und transparenten Verarbeitung von Daten kommt:</p>
<ul class="adsimple-112763364">
<li class="adsimple-112763364">Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von Ihnen verarbeiten. Sollte das zutreffen, haben Sie Recht darauf eine Kopie der Daten zu erhalten und die folgenden Informationen zu erfahren:
<ul class="adsimple-112763364">
<li class="adsimple-112763364">zu welchem Zweck wir die Verarbeitung durchführen;</li>
<li class="adsimple-112763364">die Kategorien, also die Arten von Daten, die verarbeitet werden;</li>
<li class="adsimple-112763364">wer diese Daten erhält und wenn die Daten an Drittländer übermittelt werden, wie die Sicherheit garantiert werden kann;</li>
<li class="adsimple-112763364">wie lange die Daten gespeichert werden;</li>
<li class="adsimple-112763364">das Bestehen des Rechts auf Berichtigung, Löschung oder Einschränkung der Verarbeitung und dem Widerspruchsrecht gegen die Verarbeitung;</li>
<li class="adsimple-112763364">dass Sie sich bei einer Aufsichtsbehörde beschweren können (Links zu diesen Behörden finden Sie weiter unten);</li>
<li class="adsimple-112763364">die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben haben;</li>
<li class="adsimple-112763364">ob Profiling durchgeführt wird, ob also Daten automatisch ausgewertet werden, um zu einem persönlichen Profil von Ihnen zu gelangen.</li>
</ul>
</li>
<li class="adsimple-112763364">Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten, was bedeutet, dass wir Daten richtig stellen müssen, falls Sie Fehler finden.</li>
<li class="adsimple-112763364">Sie haben laut Artikel 17 DSGVO das Recht auf Löschung („Recht auf Vergessenwerden“), was konkret bedeutet, dass Sie die Löschung Ihrer Daten verlangen dürfen.</li>
<li class="adsimple-112763364">Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der Verarbeitung, was bedeutet, dass wir die Daten nur mehr speichern dürfen aber nicht weiter verwenden.</li>
<li class="adsimple-112763364">Sie haben laut Artikel 20 DSGVO das Recht auf Datenübertragbarkeit, was bedeutet, dass wir Ihnen auf Anfrage Ihre Daten in einem gängigen Format zur Verfügung stellen.</li>
<li class="adsimple-112763364">Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine Änderung der Verarbeitung mit sich bringt.
<ul class="adsimple-112763364">
<li class="adsimple-112763364">Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e (öffentliches Interesse, Ausübung öffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse) basiert, können Sie gegen die Verarbeitung Widerspruch einlegen. Wir prüfen danach so rasch wie möglich, ob wir diesem Widerspruch rechtlich nachkommen können.</li>
<li class="adsimple-112763364">Werden Daten verwendet, um Direktwerbung zu betreiben, können Sie jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Direktmarketing verwenden.</li>
<li class="adsimple-112763364">Werden Daten verwendet, um Profiling zu betreiben, können Sie jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Profiling verwenden.</li>
</ul>
</li>
<li class="adsimple-112763364">Sie haben laut Artikel 22 DSGVO unter Umständen das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung (zum Beispiel Profiling) beruhenden Entscheidung unterworfen zu werden.</li>
<li class="adsimple-112763364">Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das heißt, Sie können sich jederzeit bei der Datenschutzbehörde beschweren, wenn Sie der Meinung sind, dass die Datenverarbeitung von personenbezogenen Daten gegen die DSGVO verstößt.</li>
</ul>
<p>
<strong class="adsimple-112763364">Kurz gesagt:</strong> Sie haben Rechte &#8211; zögern Sie nicht, die oben gelistete verantwortliche Stelle bei uns zu kontaktieren!</p>
<p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche in sonst einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. Diese ist für Österreich die Datenschutzbehörde, deren Website Sie unter <a class="adsimple-112763364" href="https://www.dsb.gv.at/?tid=112763364" target="_blank" rel="noopener">https://www.dsb.gv.at/</a> finden. In Deutschland gibt es für jedes Bundesland einen Datenschutzbeauftragten. Für nähere Informationen können Sie sich an die <a class="adsimple-112763364" href="https://www.bfdi.bund.de/DE/Home/home_node.html" target="_blank" rel="noopener">Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</a> wenden. Für unser Unternehmen ist die folgende lokale Datenschutzbehörde zuständig:</p>
<h2 id="oesterreich-datenschutzbehoerde" class="adsimple-112763364">Österreich Datenschutzbehörde</h2>
<p>
<strong class="adsimple-112763364">Leiter: </strong>Dr. Matthias Schmidl<strong class="adsimple-112763364">
<br />
Adresse: </strong>Barichgasse 40-42, 1030 Wien<strong class="adsimple-112763364">
<br />
Telefonnr.: </strong>+43 1 52 152-0<strong class="adsimple-112763364">
<br />
E-Mail-Adresse: </strong>
<a class="adsimple-112763364" href="mailto:dsb@dsb.gv.at" target="_blank" rel="noopener">dsb@dsb.gv.at</a>
<strong class="adsimple-112763364">
<br />
Website: </strong>
<a class="adsimple-112763364" href="https://www.dsb.gv.at/" target="_blank" rel="noopener">https://www.dsb.gv.at/</a>
</p>
<h2 id="sicherheit-datenverarbeitung" class="adsimple-112763364">Sicherheit der Datenverarbeitung</h2>
<p>Um personenbezogene Daten zu schützen, haben wir sowohl technische als auch organisatorische Maßnahmen umgesetzt. Wo es uns möglich ist, verschlüsseln oder pseudonymisieren wir personenbezogene Daten. Dadurch machen wir es im Rahmen unserer Möglichkeiten so schwer wie möglich, dass Dritte aus unseren Daten auf persönliche Informationen schließen können.</p>
<p>Art. 25 DSGVO spricht hier von &#8220;Datenschutz durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen&#8221; und meint damit, dass man sowohl bei Software (z. B. Formularen) also auch Hardware (z. B. Zugang zum Serverraum) immer an Sicherheit denkt und entsprechende Maßnahmen setzt. Im Folgenden gehen wir, falls erforderlich, noch auf konkrete Maßnahmen ein.</p>
<h2 id="tls-verschluesselung-https" class="adsimple-112763364">TLS-Verschlüsselung mit https</h2>
<p>TLS, Verschlüsselung und https klingen sehr technisch und sind es auch. Wir verwenden HTTPS (das Hypertext Transfer Protocol Secure steht für „sicheres Hypertext-Übertragungsprotokoll“), um Daten abhörsicher im Internet zu übertragen.<br />
Das bedeutet, dass die komplette Übertragung aller Daten von Ihrem Browser zu unserem Webserver abgesichert ist &#8211; niemand kann &#8220;mithören&#8221;.</p>
<p>Damit haben wir eine zusätzliche Sicherheitsschicht eingeführt und erfüllen den Datenschutz durch Technikgestaltung (<a class="adsimple-112763364" href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=112763364" target="_blank" rel="noopener">Artikel 25 Absatz 1 DSGVO</a>). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet, können wir den Schutz vertraulicher Daten sicherstellen.<br />
Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schlosssymbol <img role="img" src="https://www.adsimple.at/wp-content/uploads/2018/03/schlosssymbol-https.svg" width="17" height="18" /> links oben im Browser, links von der Internetadresse (z. B. beispielseite.de) und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.<br />
Wenn Sie mehr zum Thema Verschlüsselung wissen möchten, empfehlen wir die Google Suche nach &#8220;Hypertext Transfer Protocol Secure wiki&#8221; um gute Links zu weiterführenden Informationen zu erhalten.</p>
<h2 id="auftragsverarbeitungsvertrag-avv" class="adsimple-112763364">Auftragsverarbeitungsvertrag (AVV)</h2>
<p>In diesem Abschnitt möchten wir Ihnen erklären, was ein Auftragsverarbeitungsvertrag ist und warum dieser benötigt wird. Weil das Wort &#8220;Auftragsverarbeitungsvertrag&#8221; ein ziemlicher Zungenbrecher ist, werden wir hier im Text auch öfters nur das Akronym AVV benutzen. Wie die meisten Unternehmen arbeiten wir nicht alleine, sondern nehmen auch selbst Dienstleistungen anderer Unternehmen oder Einzelpersonen in Anspruch.  Durch die Einbeziehung verschiedener Unternehmen bzw. Dienstleister kann es sein, dass wir  personenbezogene Daten zur Verarbeitung weitergeben. Diese Partner fungieren dann als Auftragsverarbeiter, mit denen wir einen Vertrag, den sogenannten Auftragsverarbeitungsvertrag (AVV), abschließen. Für Sie am wichtigsten zu wissen ist, dass die Verarbeitung Ihrer personenbezogenen Daten ausschließlich nach unserer Weisung erfolgt und durch den AVV geregelt werden muss.</p>
<h3 class="adsimple-112763364">Wer sind Auftragsverarbeiter?</h3>
<p>Wir sind als Unternehmen und Websiteinhaber für alle Daten, die wir von Ihnen verarbeiten verantwortlich. Neben den Verantwortlichen kann es auch sogenannte Auftragsverarbeiter geben. Dazu zählt jedes Unternehmen bzw. jede Person, die in unserem Auftrag personenbezogene Daten verarbeitet. Genauer und nach der DSGVO-Definition gesagt: jede natürliche oder juristische Person, Behörde, Einrichtung oder eine andere Stelle, die in unserem Auftrag personenbezogene Daten verarbeitet, gilt als Auftragsverarbeiter. Auftragsverarbeiter können folglich Dienstleister wie Hosting- oder Cloudanbieter, Bezahlungs- oder Newsletter-Anbieter oder große Unternehmen wie beispielsweise Google oder Microsoft sein.</p>
<p>Zur besseren Verständlichkeit der Begrifflichkeiten hier ein Überblick über die drei Rollen in der DSGVO:</p>
<p>
<strong class="adsimple-112763364">Betroffener</strong> (Sie als Kunde oder Interessent) → <strong class="adsimple-112763364">Verantwortlicher</strong> (wir als Unternehmen und Auftraggeber) → <strong class="adsimple-112763364">Auftragsverarbeiter</strong> (Dienstleister wie z. B. Webhoster oder Cloudanbieter)</p>
<h3 class="adsimple-112763364">Inhalt eines Auftragsverarbeitungsvertrages</h3>
<p>Wie bereits oben erwähnt, haben wir mit unseren Partnern, die als Auftragsverarbeiter fungieren, einen AVV abgeschlossen. Darin wird allen voran festgehalten, dass der Auftragsverarbeiter die zu bearbeitenden Daten ausschließlich gemäß der DSGVO verarbeitet. Der Vertrag muss schriftlich abgeschlossen werden, allerdings gilt in diesem Zusammenhang auch der elektronische Vertragsabschluss als „schriftlich“. Erst auf der Grundlage des Vertrags erfolgt die Verarbeitung der personenbezogenen Daten. Im Vertrag muss folgendes enthalten sein:</p>
<ul class="adsimple-112763364">
<li class="adsimple-112763364">Bindung an uns als Verantwortlichen</li>
<li class="adsimple-112763364">Pflichten und Rechte des Verantwortlichen</li>
<li class="adsimple-112763364">Kategorien betroffener Personen</li>
<li class="adsimple-112763364">Art der personenbezogenen Daten</li>
<li class="adsimple-112763364">Art und Zweck der Datenverarbeitung</li>
<li class="adsimple-112763364">Gegenstand und Dauer der Datenverarbeitung</li>
<li class="adsimple-112763364">Durchführungsort der Datenverarbeitung</li>
</ul>
<p>Weiters enthält der Vertrag alle Pflichten des Auftragsverarbeiters. Die wichtigsten Pflichten sind:</p>
<ul class="adsimple-112763364">
<li class="adsimple-112763364">Maßnahmen zur Datensicherheit zu gewährleisten</li>
<li class="adsimple-112763364">mögliche technische und organisatorischen Maßnahmen zu treffen, um die Rechte der betroffenen Person zu schützen</li>
<li class="adsimple-112763364">ein Daten-Verarbeitungsverzeichnis zu führen</li>
<li class="adsimple-112763364">auf Anfrage der Datenschutz-Aufsichtsbehörde mit dieser zusammenzuarbeiten</li>
<li class="adsimple-112763364">eine Risikoanalyse in Bezug auf die erhaltenen personenbezogenen Daten durchzuführen</li>
<li class="adsimple-112763364">Sub-Auftragsverarbeiter dürfen nur mit schriftlicher Genehmigung des Verantwortlichen beauftragt werden</li>
</ul>
<p>Wie so eine AVV konkret aussieht, können Sie sich beispielsweise unter <a class="adsimple-112763364" href="https://www.wko.at/service/wirtschaftsrecht-gewerberecht/eu-dsgvo-mustervertrag-auftragsverarbeitung.html">https://www.wko.at/service/wirtschaftsrecht-gewerberecht/eu-dsgvo-mustervertrag-auftragsverarbeitung.html</a> ansehen. Hier wird ein Mustervertrag vorgestellt.</p>
<h2 id="cookies" class="adsimple-112763364">Cookies</h2>
<table border="1" cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-112763364">Cookies Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim Hersteller der Software, der das Cookie setzt.<br />
&#x1f4d3; Verarbeitete Daten: Abhängig vom jeweils eingesetzten Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim Hersteller der Software, der das Cookie setzt.<br />
&#x1f4c5; Speicherdauer: abhängig vom jeweiligen Cookie, kann von Stunden bis hin zu Jahren variieren<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit.f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="adsimple-112763364">Was sind Cookies?</h3>
<p>Unsere Website verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern.<br />
Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerklärung besser verstehen.</p>
<p>Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Websites speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.</p>
<p>Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Websites verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem &#8220;Hirn&#8221; Ihres Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.</p>
<p>Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen“ Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Website, wer Sie sind und bietet Ihnen die Einstellung, die Sie gewohnt sind. In einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer einzigen Datei gespeichert.</p>
<p>Die folgende Grafik zeigt eine mögliche Interaktion zwischen einem Webbrowser wie z. B. Chrome und dem Webserver. Dabei fordert der Webbrowser eine Website an und erhält vom Server ein Cookie zurück, welches der Browser erneut verwendet, sobald eine andere Seite angefordert wird.</p>
<p>
<img role="img" src="https://www.adsimple.at/wp-content/uploads/2018/03/http-cookie-interaction.svg" alt="HTTP Cookie Interaktion zwischen Browser und Webserver" width="100%" />
</p>
<p>Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Websites (z.B. Google Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs zugreifen.</p>
<p>So können zum Beispiel Cookie-Daten aussehen:</p>
<p>
<strong class="adsimple-112763364">Name:</strong> _ga<br />
<strong class="adsimple-112763364">Wert:</strong> GA1.2.1326744211.152112763364-9<br />
<strong class="adsimple-112763364">Verwendungszweck:</strong> Unterscheidung der Websitebesucher<br />
<strong class="adsimple-112763364">Ablaufdatum:</strong> nach 2 Jahren</p>
<p>Diese Mindestgrößen sollte ein Browser unterstützen können:</p>
<ul class="adsimple-112763364">
<li class="adsimple-112763364">Mindestens 4096 Bytes pro Cookie</li>
<li class="adsimple-112763364">Mindestens 50 Cookies pro Domain</li>
<li class="adsimple-112763364">Mindestens 3000 Cookies insgesamt</li>
</ul>
<h3 class="adsimple-112763364">Welche Arten von Cookies gibt es?</h3>
<p>Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird in den folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.</p>
<p>Man kann 4 Arten von Cookies unterscheiden:</p>
<p>
<strong class="adsimple-112763364">Unerlässliche Cookies<br />
</strong>Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft und später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gelöscht, selbst wenn der User sein Browserfenster schließt.</p>
<p>
<strong class="adsimple-112763364">Zweckmäßige Cookies<br />
</strong>Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website bei verschiedenen Browsern gemessen.</p>
<p>
<strong class="adsimple-112763364">Zielorientierte Cookies<br />
</strong>Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene Standorte, Schriftgrößen oder Formulardaten gespeichert.</p>
<p>
<strong class="adsimple-112763364">Werbe-Cookies<br />
</strong>Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.</p>
<p>Üblicherweise werden Sie beim erstmaligen Besuch einer Website gefragt, welche dieser Cookiearten Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.</p>
<p>Wenn Sie mehr über Cookies wissen möchten und technische Dokumentationen nicht scheuen, empfehlen wir <a class="adsimple-112763364" href="https://datatracker.ietf.org/doc/html/rfc6265">https://datatracker.ietf.org/doc/html/rfc6265</a>, dem Request for Comments der Internet Engineering Task Force (IETF) namens &#8220;HTTP State Management Mechanism&#8221;.</p>
<h3 class="adsimple-112763364">Zweck der Verarbeitung über Cookies</h3>
<p>Der Zweck ist letztendlich abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim Hersteller der Software, die das Cookie setzt.</p>
<h3 class="adsimple-112763364">Welche Daten werden verarbeitet?</h3>
<p>Cookies sind kleine Gehilfen für eine viele verschiedene Aufgaben. Welche Daten in Cookies gespeichert werden, kann man leider nicht verallgemeinern, aber wir werden Sie im Rahmen der folgenden Datenschutzerklärung über die verarbeiteten bzw. gespeicherten Daten informieren.</p>
<h3 class="adsimple-112763364">Speicherdauer von Cookies</h3>
<p>Die Speicherdauer hängt vom jeweiligen Cookie ab und wird weiter unter präzisiert. Manche Cookies werden nach weniger als einer Stunde gelöscht, andere können mehrere Jahre auf einem Computer gespeichert bleiben.</p>
<p>Sie haben außerdem selbst Einfluss auf die Speicherdauer. Sie können über ihren Browser sämtliche Cookies jederzeit manuell löschen (siehe auch unten &#8220;Widerspruchsrecht&#8221;). Ferner werden Cookies, die auf einer Einwilligung beruhen, spätestens nach Widerruf Ihrer Einwilligung gelöscht, wobei die Rechtmäßigkeit der Speicherung bis dahin unberührt bleibt.</p>
<h3 class="adsimple-112763364">Widerspruchsrecht &#8211; wie kann ich Cookies löschen?</h3>
<p>Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder welcher Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, zu deaktivieren oder nur teilweise zuzulassen. Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.</p>
<p>Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen finden:</p>
<p>
<a class="adsimple-112763364" href="https://support.google.com/chrome/answer/95647?tid=112763364" target="_blank" rel="noopener noreferrer">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a>
</p>
<p>
<a class="adsimple-112763364" href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=112763364" target="_blank" rel="noopener noreferrer">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
</p>
<p>
<a class="adsimple-112763364" href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=112763364" target="_blank" rel="noopener noreferrer">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
</p>
<p>
<a class="adsimple-112763364" href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d?tid=112763364">Internet Explorer: Löschen und Verwalten von Cookies</a>
</p>
<p>
<a class="adsimple-112763364" href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09?tid=112763364">Microsoft Edge: Löschen und Verwalten von Cookies</a>
</p>
<p>Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder &#8220;Cookies deaktivieren Chrome&#8221; im Falle eines Chrome Browsers.</p>
<h3 class="adsimple-112763364">Rechtsgrundlage</h3>
<p>Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern von Cookies eine <strong class="adsimple-112763364">Einwilligung</strong> (Artikel 6 Abs. 1 lit. a DSGVO) von Ihnen verlangt. Innerhalb der EU-Länder gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Österreich erfolgte aber die Umsetzung dieser Richtlinie in § 165 Abs. 3 des Telekommunikationsgesetzes (2021). In Deutschland wurden die Cookie-Richtlinien nicht als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in § 15 Abs.3 des Telemediengesetzes (TMG).</p>
<p>Für unbedingt notwendige Cookies, auch soweit keine Einwilligung vorliegt, bestehen <strong class="adsimple-112763364">berechtigte Interessen</strong> (Artikel 6 Abs. 1 lit. f DSGVO), die in den meisten Fällen wirtschaftlicher Natur sind. Wir möchten den Besuchern der Website eine angenehme Benutzererfahrung bescheren und dafür sind bestimmte Cookies oft unbedingt notwendig.</p>
<p>Soweit nicht unbedingt erforderliche Cookies zum Einsatz kommen, geschieht dies nur im Falle Ihrer Einwilligung. Rechtsgrundlage ist insoweit Art. 6 Abs. 1 lit. a DSGVO.</p>
<p>In den folgenden Abschnitten werden Sie genauer über den Einsatz von Cookies informiert, sofern eingesetzte Software Cookies verwendet.</p>
<h2 id="webhosting-einleitung" class="adsimple-112763364">Webhosting Einleitung</h2>
<table border="1" cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-112763364">Webhosting Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: professionelles Hosting der Website und Absicherung des Betriebs<br />
&#x1f4d3; Verarbeitete Daten: IP-Adresse, Zeitpunkt des Websitebesuchs, verwendeter Browser und weitere Daten. Mehr Details dazu finden Sie weiter unten bzw. beim jeweils eingesetzten Webhosting Provider.<br />
&#x1f4c5; Speicherdauer: abhängig vom jeweiligen Provider, aber in der Regel 2 Wochen<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit.f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="adsimple-112763364">Was ist Webhosting?</h3>
<p>Wenn Sie heutzutage Websites besuchen, werden gewisse Informationen &#8211; auch personenbezogene Daten &#8211; automatisch erstellt und gespeichert, so auch auf dieser Website. Diese Daten sollten möglichst sparsam und nur mit Begründung verarbeitet werden. Mit Website meinen wir übrigens die Gesamtheit aller Webseiten auf einer Domain, d.h. alles von der Startseite (Homepage) bis hin zur aller letzten Unterseite (wie dieser hier). Mit Domain meinen wir zum Beispiel beispiel.de oder musterbeispiel.com.</p>
<p>Wenn Sie eine Website auf einem Computer, Tablet oder Smartphone ansehen möchten, verwenden Sie dafür ein Programm, das sich Webbrowser nennt. Sie kennen vermutlich einige Webbrowser beim Namen: Google Chrome, Microsoft Edge, Mozilla Firefox und Apple Safari. Wir sagen kurz Browser oder Webbrowser dazu.</p>
<p>Um die Website anzuzeigen, muss sich der Browser zu einem anderen Computer verbinden, wo der Code der Website gespeichert ist: dem Webserver. Der Betrieb eines Webservers ist eine komplizierte und aufwendige Aufgabe, weswegen dies in der Regel von professionellen Anbietern, den Providern, übernommen wird. Diese bieten Webhosting an und sorgen damit für eine verlässliche und fehlerfreie Speicherung der Daten von Websites. Eine ganze Menge Fachbegriffe, aber bitte bleiben Sie dran, es wird noch besser!</p>
<p>Bei der Verbindungsaufnahme des Browsers auf Ihrem Computer (Desktop, Laptop, Tablet oder Smartphone) und während der Datenübertragung zu und vom Webserver kann es zu einer Verarbeitung personenbezogener Daten kommen. Einerseits speichert Ihr Computer Daten, andererseits muss auch der Webserver Daten eine Zeit lang speichern, um einen ordentlichen Betrieb zu gewährleisten.</p>
<p>Ein Bild sagt mehr als tausend Worte, daher zeigt folgende Grafik zur Veranschaulichung das Zusammenspiel zwischen Browser, dem Internet und dem Hosting-Provider.</p>
<p>
<img role="img" src="https://www.adsimple.at/wp-content/uploads/2018/03/browser-und-webserver.svg" alt="Browser und Webserver" width="100%" />
</p>
<h3 class="adsimple-112763364">Warum verarbeiten wir personenbezogene Daten?</h3>
<p>Die Zwecke der Datenverarbeitung sind:</p>
<ol>
<li class="adsimple-112763364">Professionelles Hosting der Website und Absicherung des Betriebs</li>
<li class="adsimple-112763364">zur Aufrechterhaltung der Betriebs- und IT-Sicherheit</li>
<li class="adsimple-112763364">Anonyme Auswertung des Zugriffsverhaltens zur Verbesserung unseres Angebots und ggf. zur Strafverfolgung bzw. Verfolgung von Ansprüchen</li>
</ol>
<h3 class="adsimple-112763364">Welche Daten werden verarbeitet?</h3>
<p>Auch während Sie unsere Website jetzt gerade besuchen, speichert unser Webserver, das ist der Computer auf dem diese Webseite gespeichert ist, in der Regel automatisch Daten wie</p>
<ul class="adsimple-112763364">
<li class="adsimple-112763364">die komplette Internetadresse (URL) der aufgerufenen Webseite</li>
<li class="adsimple-112763364">Browser und Browserversion (z. B. Chrome 87)</li>
<li class="adsimple-112763364">das verwendete Betriebssystem (z. B. Windows 10)</li>
<li class="adsimple-112763364">die Adresse (URL) der zuvor besuchten Seite (Referrer URL) (z. B. <a class="adsimple-112763364" href="https://www.beispielquellsite.de/vondabinichgekommen/" target="_blank" rel="follow noopener">https://www.beispielquellsite.de/vondabinichgekommen/</a>)</li>
<li class="adsimple-112763364">den Hostnamen und die IP-Adresse des Geräts von welchem aus zugegriffen wird (z. B. COMPUTERNAME und 194.23.43.121)</li>
<li class="adsimple-112763364">Datum und Uhrzeit</li>
<li class="adsimple-112763364">in Dateien, den sogenannten Webserver-Logfiles</li>
</ul>
<h3 class="adsimple-112763364">Wie lange werden Daten gespeichert?</h3>
<p>In der Regel werden die oben genannten Daten zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten von Behörden eingesehen werden.</p>
<p>
<strong class="adsimple-112763364">Kurz gesagt:</strong> Ihr Besuch wird durch unseren Provider (Firma, die unsere Website auf speziellen Computern (Servern) laufen lässt), protokolliert, aber wir geben Ihre Daten nicht ohne Zustimmung weiter!</p>
<h3 class="adsimple-112763364">Rechtsgrundlage</h3>
<p>Die Rechtmäßigkeit der Verarbeitung personenbezogener Daten im Rahmen des Webhosting ergibt sich aus Art. 6 Abs. 1 lit. f DSGVO (Wahrung der berechtigten Interessen), denn die Nutzung von professionellem Hosting bei einem Provider ist notwendig, um das Unternehmen im Internet sicher und nutzerfreundlich präsentieren und Angriffe und Forderungen hieraus gegebenenfalls verfolgen zu können.</p>
<p>Zwischen uns und dem Hosting-Provider besteht in der Regel ein Vertrag über die Auftragsverarbeitung gemäß Art. 28 f. DSGVO, der die Einhaltung von Datenschutz gewährleistet und Datensicherheit garantiert.</p>
<h2 id="1und1-ionos-datenschutzerklaerung" class="adsimple-112763364">1&amp;1 IONOS Webhosting Datenschutzerklärung</h2>
<table border="1" cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-112763364">1&amp;1 IONOS Webhosting Datenschutzerklärung Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: Website-Speicher und Zugänglichkeit im Internet<br />
&#x1f4d3; Verarbeitete Daten: IP-Adresse, aber vor allem auch technische Daten<br />
&#x1f4c5; Speicherdauer: Besucherdaten werden nach 8 Wochen gelöscht<br />
&#x2696;&#xfe0f; Rechtsgrundlagen:  Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="adsimple-112763364">Was ist 1&amp;1 IONOS Webhosting?</h3>
<p>Um unsere Website zu hosten, nutzen wir die Webhosting-Dienste des Unternehmens IONOS by 1&amp;1. In Deutschland hat die 1&amp;1 IONOS SE ihren Sitz in der Elgendorfer Str. 57 in 56410 Montabaur. In Österreich finden Sie die 1&amp;1 IONOS SE in der Gumpendorfer Straße 142/PF 266 in 1060 Wien.</p>
<p>IONOS bietet folgende Leistungen rund um Webhosting an: Domain, Website &amp; Shop, Hosting &amp; WordPress, Marketing, E-Mail &amp; Office, IONOS Cloud und Server. Mit über 22 Millionen Domains, fast 9 Millionen Kundenverträgen und 100 000 Servern ist IONOS einer der größten deutschen Platzhirsche im Bereich Webhosting.<br />
Wir haben es in unseren einleitenden Worten zum Thema Webhosting schon erwähnt: durch das Hosting werden auch Daten von Ihnen bzw. Ihres Endgeräts auf den IONOS-Servern gespeichert. Allen voran wird Ihre IP-Adresse, die ja bekanntlich zu den personenbezogenen Daten zählt, gespeichert. Zusätzlich werden auch technische Daten wie etwa die URL unserer Webseite, Name des Internetbrowsers oder welches Betriebssystem Sie verwenden, gespeichert.</p>
<h3 class="adsimple-112763364">Warum verwenden wir 1&amp;1 IONOS Webhosting?</h3>
<p>IONOS wurde bereits 1988 in Deutschland gegründet und hat somit über 30 Jahre Erfahrung auf dem Buckel. Das bedeutet aber nicht, dass das Unternehmen sich in technologischer Hinsicht nicht stets weiterentwickelt. Genau diese Verbindung aus Erfahrung und Innovationsgeist bietet aus unserer Sicht eine gute Basis für unsere Website. Schließlich wollen wir, dass unsere Website 24 Stunden reibungslos funktioniert und dabei ein hohes Maß an Sicherheit gewährleistet. Da IONOS den monatlichen Datenverkehr nicht begrenzt und jede Menge Speicherplatz zur Verfügung stellt, bleibt unsere Website auch bei vielen Besuchern leistungsstark. Wir sind mit dem Speed der Website sehr zufrieden und das Preis-Leistungs-Verhältnis passt derzeit zu unseren Anforderungen.</p>
<h3 class="adsimple-112763364">Welche Daten werden von 1&amp;1 IONOS Webhosting verarbeitet?</h3>
<p>1&amp;1 IONOS Webhosting kann auch personenbezogene Daten von Ihnen verarbeitet. Wenn Sie unsere Website besuchen, werden folgende Daten von Ihnen bzw. von Ihrem Computer bei IONOS gespeichert:</p>
<ul class="adsimple-112763364">
<li class="adsimple-112763364">die zuvor besuchte Website (auch Referrer genannt)</li>
<li class="adsimple-112763364">die angeforderter Website (also in diesem Fall unsere Website)</li>
<li class="adsimple-112763364">Browsertyp und Browserversion</li>
<li class="adsimple-112763364">Ihr verwendetes Betriebssystem und Ihr Gerätetyp</li>
<li class="adsimple-112763364">Uhrzeit des Seitenzugriffs</li>
<li class="adsimple-112763364">Ihre IP-Adresse in anonymisierter Form</li>
</ul>
<p>Die erhobenen Daten werden verwendet, um die Sicherheit der Website zu steigern, mögliche Fehler zu erkennen und auch um anonyme statistische Analysen durchzuführen. Laut IONOS wird die anonymisierte IP-Adresse nur zur Feststellung des Ortes des Zugriffs genutzt.</p>
<h3 class="adsimple-112763364">Wie lange und wo werden die Daten gespeichert?</h3>
<p>Gespeichert werden die Daten auf den eigenen Servern von IONOS. Grundsätzlich speichert IONOS die Daten so lange, wie es zur Erfüllung ihrer Pflichten notwendig ist. Besucherdaten werden 8 Wochen gespeichert. Es kann aber auch vorkommen, dass Daten länger gespeichert werden, um beispielsweise Beweise für mögliche rechtliche Auseinandersetzungen zu haben. Besucherdaten werden nicht and Dritte weitergegeben und auch nicht in ein Land außerhalb der EU transferiert.</p>
<h3 class="adsimple-112763364">Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
<p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung bzw. Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Sie können zudem auch jederzeit die Einwilligung zur Verarbeitung der Daten widerrufen.</p>
<p>Falls Sie grundsätzlich Cookies deaktivieren, löschen oder verwalten wollen, finden Sie unter dem Abschnitt „Cookies“ die entsprechenden Links zu den jeweiligen Anleitungen der bekanntesten Browser.</p>
<h3 class="adsimple-112763364">Rechtsgrundlage</h3>
<p>Von unserer Seite besteht ein berechtigtes Interesse, IONOS zu verwenden, um unser Online-Service anbieten zu können. Professionelles Hosting bei einem Provider ist erforderlich, um unser Unternehmen im Internet sicher und nutzerfreundlich präsentieren und mögliche Cyberangriffe verfolgen zu können. Die dafür entsprechende Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen).</p>
<p>Viele weitere Informationen über den Datenschutz bei IONOS finden Sie in der Datenschutzerklärung auf <a class="adsimple-112763364" href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/?tid=112763364" target="_blank" rel="follow noopener">https://www.ionos.de/terms-gtc/datenschutzerklaerung/</a>. Wenn Sie noch weitere Fragen zum Thema Datenschutz haben, können Sie auch das Datenschutz-Team von IONOS per E-Mail an <a class="adsimple-112763364" href="mailto:datenschutz@ionos.de" target="_blank" rel="follow noopener">datenschutz@ionos.de</a> kontaktieren.</p>
<h2 id="web-analytics-einleitung" class="adsimple-112763364">Web Analytics Einleitung</h2>
<table border="1" cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-112763364">Web Analytics Datenschutzerklärung Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: Auswertung der Besucherinformationen zur Optimierung des Webangebots.<br />
&#x1f4d3; Verarbeitete Daten: Zugriffsstatistiken, die Daten wie Standorte der Zugriffe, Gerätedaten, Zugriffsdauer und Zeitpunkt, Navigationsverhalten, Klickverhalten und IP-Adressen enthalten. Mehr Details dazu finden Sie beim jeweils eingesetzten Web Analytics Tool.<br />
&#x1f4c5; Speicherdauer: abhängig vom eingesetzten Web-Analytics-Tool<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="adsimple-112763364">Was ist Web Analytics?</h3>
<p>Wir verwenden auf unserer Website Software zur Auswertung des Verhaltens der Website-Besucher, kurz Web Analytics oder Web-Analyse genannt. Dabei werden Daten gesammelt, die der jeweilige Analytic-Tool-Anbieter (auch Trackingtool genannt) speichert, verwaltet und verarbeitet. Mit Hilfe der Daten werden Analysen über das Nutzerverhalten auf unserer Website erstellt und uns als Websitebetreiber zur Verfügung gestellt. Zusätzlich bieten die meisten Tools verschiedene Testmöglichkeiten an. So können wir etwa testen, welche Angebote oder Inhalte bei unseren Besuchern am besten ankommen. Dafür zeigen wir Ihnen für einen begrenzten Zeitabschnitt zwei verschiedene Angebote. Nach dem Test (sogenannter A/B-Test) wissen wir, welches Produkt bzw. welcher Inhalt unsere Websitebesucher interessanter finden. Für solche Testverfahren, wie auch für andere Analytics-Verfahren, können auch Userprofile erstellt werden und die Daten in Cookies gespeichert werden.</p>
<h3 class="adsimple-112763364">Warum betreiben wir Web Analytics?</h3>
<p>Mit unserer Website haben wir ein klares Ziel vor Augen: wir wollen für unsere Branche das beste Webangebot auf dem Markt liefern. Um dieses Ziel zu erreichen, wollen wir einerseits das beste und interessanteste Angebot bieten und andererseits darauf achten, dass Sie sich auf unserer Website rundum wohlfühlen. Mit Hilfe von Webanalyse-Tools können wir das Verhalten unserer Websitebesucher genauer unter die Lupe nehmen und dann entsprechend unser Webangebot für Sie und uns verbessern. So können wir beispielsweise erkennen wie alt unsere Besucher durchschnittlich sind, woher sie kommen, wann unsere Website am meisten besucht wird oder welche Inhalte oder Produkte besonders beliebt sind. All diese Informationen helfen uns die Website zu optimieren und somit bestens an Ihre Bedürfnisse, Interessen und Wünsche anzupassen.</p>
<h3 class="adsimple-112763364">Welche Daten werden verarbeitet?</h3>
<p>Welche Daten genau gespeichert werden, hängt natürlich von den verwendeten Analyse-Tools ab. Doch in der Regel wird zum Beispiel gespeichert, welche Inhalte Sie auf unserer Website ansehen, auf welche Buttons oder Links Sie klicken, wann Sie eine Seite aufrufen, welchen Browser sie verwenden, mit welchem Gerät (PC, Tablet, Smartphone usw.) Sie die Website besuchen oder welches Computersystem Sie verwenden. Wenn Sie damit einverstanden waren, dass auch Standortdaten erhoben werden dürfen, können auch diese durch den Webanalyse-Tool-Anbieter verarbeitet werden.</p>
<p>Zudem wird auch Ihre IP-Adresse gespeichert. Gemäß der Datenschutz-Grundverordnung (DSGVO) sind IP-Adressen personenbezogene Daten. Ihre IP-Adresse wird allerdings in der Regel pseudonymisiert (also in unkenntlicher und gekürzter Form) gespeichert. Für den Zweck der Tests, der Webanalyse und der Weboptimierung werden grundsätzlich keine direkten Daten, wie etwa Ihr Name, Ihr Alter, Ihre Adresse oder Ihre E-Mail-Adresse gespeichert. All diese Daten werden, sofern sie erhoben werden, pseudonymisiert gespeichert. So können Sie als Person nicht identifiziert werden.</p>
<p>Das folgende Beispiel zeigt schematisch die Funktionsweise von Google Analytics als Beispiel für client-basiertes Webtracking mit Java-Script-Code.</p>
<p>
<img role="img" src="https://www.adsimple.at/wp-content/uploads/2021/04/google-analytics-dataflow.svg" alt="Schematischer Datenfluss bei Google Analytics" width="100%" />
</p>
<p>Wie lange die jeweiligen Daten gespeichert werden, hängt immer vom Anbieter ab. Manche Cookies speichern Daten nur für ein paar Minuten bzw. bis Sie die Website wieder verlassen, andere Cookies können Daten über mehrere Jahre speichern.</p>
<h3 class="adsimple-112763364">
<span class="adsimple-112763364" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Wo und wie lange werden Daten gespeichert?&quot;}" data-sheets-userformat="{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}">Dauer der Datenverarbeitung</span>
</h3>
<p>Über die Dauer der Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben. Generell verarbeiten wir personenbezogene Daten nur so lange wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist. Wenn es, wie zum Beispiel im Fall von Buchhaltung, gesetzlich vorgeschrieben ist, kann diese Speicherdauer auch überschritten werden.</p>
<h3 class="adsimple-112763364">Widerspruchsrecht</h3>
<p>Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies bzw. Drittanbietern zu widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Zum Beispiel können Sie auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten, deaktivieren oder löschen.</p>
<h3 class="adsimple-112763364">Rechtsgrundlage</h3>
<p>Der Einsatz von Web-Analytics setzt Ihre Einwilligung voraus, welche wir mit unserem Cookie Popup eingeholt haben. Diese Einwilligung stellt laut<strong class="adsimple-112763364"> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong> die Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch Web-Analytics Tools vorkommen kann, dar.</p>
<p>Zusätzlich zur Einwilligung besteht von unserer Seite ein berechtigtes Interesse daran, das Verhalten der Websitebesucher zu analysieren und so unser Angebot technisch und wirtschaftlich zu verbessern. Mit Hilfe von Web-Analytics erkennen wir Fehler der Website, können Attacken identifizieren und die Wirtschaftlichkeit verbessern. Die Rechtsgrundlage dafür ist <strong class="adsimple-112763364">Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</strong>. Wir setzen die Tools gleichwohl nur ein, soweit sie eine Einwilligung erteilt haben.</p>
<p>Da bei Web-Analytics-Tools Cookies zum Einsatz kommen, empfehlen wir Ihnen auch das Lesen unserer allgemeinen Datenschutzerklärung zu Cookies. Um zu erfahren, welche Daten von Ihnen genau gespeichert und verarbeitet werden, sollten Sie die Datenschutzerklärungen der jeweiligen Tools durchlesen.</p>
<p>Informationen zu speziellen Web-Analytics-Tools, erhalten Sie &#8211; sofern vorhanden &#8211; in den folgenden Abschnitten.</p>
<h2 id="google-analytics-datenschutzerklaerung" class="adsimple-112763364">Google Analytics Datenschutzerklärung</h2>
<table border="1" cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-112763364">Google Analytics Datenschutzerklärung Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: Auswertung der Besucherinformationen zur Optimierung des Webangebots.<br />
&#x1f4d3; Verarbeitete Daten: Zugriffsstatistiken, die Daten wie Standorte der Zugriffe, Gerätedaten, Zugriffsdauer und Zeitpunkt, Navigationsverhalten und Klickverhalten enthalten. Mehr Details dazu finden Sie weiter unten in dieser Datenschutzerklärung.<br />
&#x1f4c5; Speicherdauer: individuell einstellbar, standardmäßig speichert Google Analytics 4 Daten für 14 Monate<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="adsimple-112763364">Was ist Google Analytics?</h3>
<p>Wir verwenden auf unserer Website das Analyse-Tracking Tool Google Analytics in der Version Google Analytics 4 (GA4) des amerikanischen Unternehmens Google Inc. Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) für alle Google-Dienste verantwortlich. Google Analytics sammelt Daten über Ihre Handlungen auf unserer Website. Durch die Kombination aus verschiedenen Technologien wie Cookies, Geräte-IDs und Anmeldeinformationen, können Sie als User aber über verschiedene Geräte hinweg identifiziert werden. Dadurch können Ihre Handlungen auch plattformübergreifend analysiert werden.</p>
<p>Wenn Sie beispielsweise einen Link anklicken, wird dieses Ereignis in einem Cookie gespeichert und an Google Analytics versandt. Mithilfe der Berichte, die wir von Google Analytics erhalten, können wir unsere Website und unseren Service besser an Ihre Wünsche anpassen. Im Folgenden gehen wir näher auf das Tracking-Tool ein und informieren Sie vor allem darüber, welche Daten verarbeitet werden und wie Sie das verhindern können.</p>
<p>Google Analytics ist ein Trackingtool, das der Datenverkehrsanalyse unserer Website dient. Basis dieser Messungen und Analysen ist eine pseudonyme Nutzeridentifikationsnummer. Diese Nummer beinhaltet keine personenbezogenen Daten wie Name oder Adresse, sondern dient dazu, Ereignisse einem Endgerät zuzuordnen. GA4 nutzt ein ereignisbasiertes Modell, das detaillierte Informationen zu Userinteraktionen wie etwa Seitenaufrufe, Klicks, Scrollen, Conversion-Ereignisse erfasst. Zudem wurden in GA4 auch verschiedene maschinelle Lernfunktionen eingebaut, um das Nutzerverhalten und gewissen Trends besser zu verstehen. GA4 setzt mit Hilfe maschineller Lernfunktionen auf Modellierungen. Das heißt auf Grundlage der erhobenen Daten können auch fehlende Daten hochgerechnet werden, um damit die Analyse zu optimieren und auch um Prognosen geben zu können.</p>
<p>Damit Google Analytics grundsätzlich funktioniert, wird ein Tracking-Code in den Code unserer Website eingebaut. Wenn Sie unsere Website besuchen, zeichnet dieser Code verschiedene Ereignisse auf, die Sie auf unserer Website ausführen. Mit dem ereignisbasierten Datenmodell von GA4 können wir als Websitebetreiber spezifische Ereignisse definieren und verfolgen, um Analysen von Userinteraktionen zu erhalten. Somit können neben allgemeinen Informationen wie Klicks oder Seitenaufrufe auch spezielle Ereignisse, die für unser Geschäft wichtig sind, verfolgt werden. Solche speziellen Ereignisse können zum Beispiel das Absenden eines Kontaktformulars oder der Kauf eines Produkts sein.</p>
<p>Sobald Sie unsere Website verlassen, werden diese Daten an die Google-Analytics-Server gesendet und dort gespeichert.</p>
<p>Google verarbeitet die Daten und wir bekommen Berichte über Ihr Userverhalten. Dabei kann es sich unter anderem um folgende Berichte handeln:</p>
<ul class="adsimple-112763364">
<li class="adsimple-112763364">Zielgruppenberichte: Über Zielgruppenberichte lernen wir unsere User besser kennen und wissen genauer, wer sich für unser Service interessiert.</li>
<li class="adsimple-112763364">Anzeigeberichte: Durch Anzeigeberichte können wir unsere Onlinewerbung leichter analysieren und verbessern.</li>
<li class="adsimple-112763364">Akquisitionsberichte: Akquisitionsberichte geben uns hilfreiche Informationen darüber, wie wir mehr Menschen für unseren Service begeistern können.</li>
<li class="adsimple-112763364">Verhaltensberichte: Hier erfahren wir, wie Sie mit unserer Website interagieren. Wir können nachvollziehen welchen Weg Sie auf unserer Seite zurücklegen und welche Links Sie anklicken.</li>
<li class="adsimple-112763364">Conversionsberichte: Conversion nennt man einen Vorgang, bei dem Sie aufgrund einer Marketing-Botschaft eine gewünschte Handlung ausführen. Zum Beispiel, wenn Sie von einem reinen Websitebesucher zu einem Käufer oder Newsletter-Abonnent werden. Mithilfe dieser Berichte erfahren wir mehr darüber, wie unsere Marketing-Maßnahmen bei Ihnen ankommen. So wollen wir unsere Conversionrate steigern.</li>
<li class="adsimple-112763364">Echtzeitberichte: Hier erfahren wir immer sofort, was gerade auf unserer Website passiert. Zum Beispiel sehen wir wie viele User gerade diesen Text lesen.</li>
</ul>
<p>Neben den oben genannten Analyseberichten bietet Google Analytics 4 unter anderem auch folgende Funktionen an:</p>
<ul class="adsimple-112763364">
<li class="adsimple-112763364">Ereignisbasiertes Datenmodell: Dieses Modell erfasst ganz spezifische Ereignisse, die auf unserer Website stattfinden können. Zum Beispiel das Abspielen eines Videos, der Kauf eines Produkts oder das Anmelden zu unserem Newsletter.</li>
<li class="adsimple-112763364">Erweiterte Analysefunktionen: Mit diesen Funktionen können wir Ihr Verhalten auf unserer Website oder gewisse allgemeine Trends noch besser verstehen. So können wir etwa Usergruppen segmentieren, Vergleichsanalysen von Zielgruppen machen oder Ihren Weg bzw. Pfad auf unserer Website nachvollziehen.</li>
<li class="adsimple-112763364">Vorhersagemodellierung: Auf Grundlage erhobener Daten können durch maschinelles Lernen fehlende Daten hochgerechnet werden, die zukünftige Ereignisse und Trends vorhersagen. Das kann uns helfen, bessere Marketingstrategien zu entwickeln.</li>
<li class="adsimple-112763364">Cross-Plattform-Analyse: Die Erfassung und Analyse von Daten sind sowohl von Websites als auch von Apps möglich. Das bietet uns die Möglichkeit, das Userverhalten plattformübergreifend zu analysieren, sofern Sie natürlich der Datenverarbeitung eingewilligt haben.</li>
</ul>
<h3 class="adsimple-112763364">Warum verwenden wir Google Analytics auf unserer Website?</h3>
<p>Unser Ziel mit dieser Website ist klar: Wir wollen Ihnen den bestmöglichen Service bieten. Die Statistiken und Daten von Google Analytics helfen uns dieses Ziel zu erreichen.</p>
<p>Die statistisch ausgewerteten Daten zeigen uns ein klares Bild von den Stärken und Schwächen unserer Website. Einerseits können wir unsere Seite so optimieren, dass sie von interessierten Menschen auf Google leichter gefunden wird. Andererseits helfen uns die Daten, Sie als Besucher besser zu verstehen. Wir wissen somit sehr genau, was wir an unserer Website verbessern müssen, um Ihnen das bestmögliche Service zu bieten. Die Daten dienen uns auch, unsere Werbe- und Marketing-Maßnahmen individueller und kostengünstiger durchzuführen. Schließlich macht es nur Sinn, unsere Produkte und Dienstleistungen Menschen zu zeigen, die sich dafür interessieren.</p>
<h3 class="adsimple-112763364">Welche Daten werden von Google Analytics gespeichert?</h3>
<p>Google Analytics erstellt mithilfe eines Tracking-Codes eine zufällige, eindeutige ID, die mit Ihrem Browser-Cookie verbunden ist. So erkennt Sie Google Analytics als neuen User und Ihnen wird eine User-ID zugeordnet. Wenn Sie das nächste Mal unsere Seite besuchen, werden Sie als „wiederkehrender“ User erkannt. Alle gesammelten Daten werden gemeinsam mit dieser User-ID gespeichert. So ist es erst möglich pseudonyme Userprofile auszuwerten.</p>
<p>Um mit Google Analytics unsere Website analysieren zu können, muss eine Property-ID in den Tracking-Code eingefügt werden. Die Daten werden dann in der entsprechenden Property gespeichert. Für jede neu angelegte Property ist die Google Analytics 4-Property standardmäßig. Je nach verwendeter Property werden Daten unterschiedlich lange gespeichert.</p>
<p>Durch Kennzeichnungen wie Cookies, App-Instanz-IDs, User-IDs oder etwa benutzerdefinierte Ereignisparameter werden Ihre Interaktionen, sofern Sie eingewilligt haben, plattformübergreifend gemessen. Interaktionen sind alle Arten von Handlungen, die Sie auf unserer Website ausführen. Wenn Sie auch andere Google-Systeme (wie z.B. ein Google-Konto) nützen, können über Google Analytics generierte Daten mit Drittanbieter-Cookies verknüpft werden. Google gibt keine Google Analytics-Daten weiter, außer wir als Websitebetreiber genehmigen das. Zu Ausnahmen kann es kommen, wenn es gesetzlich erforderlich ist.</p>
<p>Laut Google werden in Google Analytics 4 keine IP-Adressen protokolliert oder gespeichert. Google nutzt die IP-Adressdaten allerdings für die Ableitung von Standortdaten und löscht sie unmittelbar danach. Alle IP-Adressen, die von Usern in der EU erhoben werden, werden also gelöscht, bevor die Daten in einem Rechenzentrum oder auf einem Server gespeichert werden.</p>
<p>Da bei Google Analytics 4 der Fokus auf ereignisbasierten Daten liegt, verwendet das Tool im Vergleich zu früheren Versionen (wie Google Universal Analytics) deutlich weniger Cookies. Dennoch gibt es einige spezifische Cookies, die von GA4 verwendet werden. Dazu zählen zum Beispiel:</p>
<p>
<strong class="adsimple-112763364">Name:</strong> _ga<br />
<strong class="adsimple-112763364">Wert: </strong>2.1326744211.152112763364-5<br />
<strong class="adsimple-112763364">Verwendungszweck:</strong> Standardmäßig verwendet analytics.js das Cookie _ga, um die User-ID zu speichern. Grundsätzlich dient es zur Unterscheidung der Webseitenbesucher.<br />
<strong class="adsimple-112763364">Ablaufdatum:</strong> nach 2 Jahren</p>
<p>
<strong class="adsimple-112763364">Name:</strong> _gid<br />
<strong class="adsimple-112763364">Wert: </strong>2.1687193234.152112763364-1<br />
<strong class="adsimple-112763364">Verwendungszweck:</strong> Das Cookie dient auch zur Unterscheidung der Webseitenbesucher<br />
<strong class="adsimple-112763364">Ablaufdatum:</strong> nach 24 Stunden</p>
<p>
<strong class="adsimple-112763364">Name:</strong> _gat_gtag_UA_&lt;property-id&gt;<br />
<strong class="adsimple-112763364">Wert:</strong> 1<br />
<strong class="adsimple-112763364">Verwendungszweck:</strong> Wird zum Senken der Anforderungsrate verwendet. Wenn Google Analytics über den Google Tag Manager bereitgestellt wird, erhält dieser Cookie den Namen _dc_gtm_ &lt;property-id&gt;.<br />
<strong class="adsimple-112763364">Ablaufdatum: </strong>nach 1 Minute</p>
<p>
<strong class="adsimple-112763364">Anmerkung:</strong> Diese Aufzählung kann keinen Anspruch auf Vollständigkeit erheben, da Google die Wahl ihrer Cookies immer wieder auch verändert. Ziel von GA4 ist es auch, den Datenschutz zu verbessern. Daher bietet das Tool einige Möglichkeiten zur Kontrolle der Datenerfassung. So können wir beispielsweise die Speicherdauer selbst festlegen und auch die Datenerfassung steuern.</p>
<p>Hier zeigen wir Ihnen einen Überblick über die wichtigsten Arten von Daten, die mit Google Analytics erhoben werden:</p>
<p>
<strong class="adsimple-112763364">Heatmaps:</strong> Google legt sogenannte Heatmaps an. Über Heatmaps sieht man genau jene Bereiche, die Sie anklicken. So bekommen wir Informationen, wo Sie auf unserer Seite „unterwegs“ sind.</p>
<p>
<strong class="adsimple-112763364">Sitzungsdauer:</strong> Als Sitzungsdauer bezeichnet Google die Zeit, die Sie auf unserer Seite verbringen, ohne die Seite zu verlassen. Wenn Sie 20 Minuten inaktiv waren, endet die Sitzung automatisch.</p>
<p>
<strong class="adsimple-112763364">Absprungrate</strong> (engl. Bouncerate): Von einem Absprung ist die Rede, wenn Sie auf unserer Website nur eine Seite ansehen und dann unsere Website wieder verlassen.</p>
<p>
<strong class="adsimple-112763364">Kontoerstellung:</strong> Wenn Sie auf unserer Website ein Konto erstellen bzw. eine Bestellung machen, erhebt Google Analytics diese Daten.</p>
<p>
<strong class="adsimple-112763364">Standort:</strong> IP-Adressen werden in Google Analytics nicht protokolliert oder gespeichert. Allerdings werden kurz vor der Löschung der IP-Adresse Ableitungen für Standortdaten genutzt.</p>
<p>
<strong class="adsimple-112763364">Technische Informationen:</strong> Zu den technischen Informationen zählen unter anderem Ihr Browsertyp, Ihr Internetanbieter oder Ihre Bildschirmauflösung.</p>
<p>
<strong class="adsimple-112763364">Herkunftsquelle:</strong> Google Analytics beziehungsweise uns interessiert natürlich auch über welche Website oder welche Werbung Sie auf unsere Seite gekommen sind.</p>
<p>Weitere Daten sind Kontaktdaten, etwaige Bewertungen, das Abspielen von Medien (z. B., wenn Sie ein Video über unsere Seite abspielen), das Teilen von Inhalten über Social Media oder das Hinzufügen zu Ihren Favoriten. Die Aufzählung hat keinen Vollständigkeitsanspruch und dient nur zu einer allgemeinen Orientierung der Datenspeicherung durch Google Analytics.</p>
<h3 class="adsimple-112763364">Wie lange und wo werden die Daten gespeichert?</h3>
<p>Google hat ihre Server auf der ganzen Welt verteilt. Hier können Sie genau nachlesen, wo sich die Google-Rechenzentren befinden: <a class="adsimple-112763364" href="https://www.google.com/about/datacenters/locations/?hl=de">https://www.google.com/about/datacenters/locations/?hl=de</a>
</p>
<p>Ihre Daten werden auf verschiedenen physischen Datenträgern verteilt. Das hat den Vorteil, dass die Daten schneller abrufbar sind und vor Manipulation besser geschützt sind. In jedem Google-Rechenzentrum gibt es entsprechende Notfallprogramme für Ihre Daten. Wenn beispielsweise die Hardware bei Google ausfällt oder Naturkatastrophen Server lahmlegen, bleibt das Risiko einer Dienstunterbrechung bei Google dennoch gering.</p>
<p>Die Aufbewahrungsdauer der Daten hängt von den verwendeten Properties ab. Die Speicherdauer wird stets für jede einzelne Property eigens festgelegt. Google Analytics bietet uns zur Kontrolle der Speicherdauer vier Optionen an:</p>
<ul class="adsimple-112763364">
<li class="adsimple-112763364">2 Monate: das ist die kürzeste Speicherdauer.</li>
<li class="adsimple-112763364">14 Monate: standardmäßig bleiben die Daten bei GA4 für 14 Monate gespeichert.</li>
<li class="adsimple-112763364">26 Monate: man kann die Daten auch 26 Monate lang speichern.</li>
<li class="adsimple-112763364">Daten werden erst gelöscht, wenn wir sie manuell löschen</li>
</ul>
<p>Zusätzlich gibt es auch die Option, dass Daten erst dann gelöscht werden, wenn Sie innerhalb des von uns gewählten Zeitraums nicht mehr unsere Website besuchen. In diesem Fall wird die Aufbewahrungsdauer jedes Mal zurückgesetzt, wenn Sie unsere Website innerhalb des festgelegten Zeitraums wieder besuchen.</p>
<p>Wenn der festgelegte Zeitraum abgelaufen ist, werden einmal im Monat die Daten gelöscht. Diese Aufbewahrungsdauer gilt für Ihre Daten, die mit Cookies, Usererkennung und Werbe-IDs (z.B. Cookies der DoubleClick-Domain) verknüpft sind. Berichtergebnisse basieren auf aggregierten Daten und werden unabhängig von Nutzerdaten gespeichert. Aggregierte Daten sind eine Zusammenschmelzung von Einzeldaten zu einer größeren Einheit.</p>
<h3 class="adsimple-112763364">Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
<p>Nach dem Datenschutzrecht der Europäischen Union haben Sie das Recht, Auskunft über Ihre Daten zu erhalten, sie zu aktualisieren, zu löschen oder einzuschränken. Mithilfe des Browser-Add-ons zur Deaktivierung von Google Analytics-JavaScript (analytics.js, gtag.js) verhindern Sie, dass Google Analytics 4 Ihre Daten verwendet. Das Browser-Add-on können Sie unter <a class="adsimple-112763364" href="https://tools.google.com/dlpage/gaoptout?hl=de">https://tools.google.com/dlpage/gaoptout?hl=de</a> runterladen und installieren. Beachten Sie bitte, dass durch dieses Add-on nur die Datenerhebung durch Google Analytics deaktiviert wird.</p>
<p>Falls Sie grundsätzlich Cookies deaktivieren, löschen oder verwalten wollen, finden Sie unter dem Abschnitt „Cookies“ die entsprechenden Links zu den jeweiligen Anleitungen der bekanntesten Browser.</p>
<h3 class="adsimple-112763364">Rechtsgrundlage</h3>
<p>Der Einsatz von Google Analytics setzt Ihre Einwilligung voraus, welche wir mit unserem Cookie Popup eingeholt haben. Diese Einwilligung stellt laut<strong class="adsimple-112763364"> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong> die Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch Web-Analytics Tools vorkommen kann, dar.</p>
<p>Zusätzlich zur Einwilligung besteht von unserer Seite ein berechtigtes Interesse daran, das Verhalten der Websitebesucher zu analysieren und so unser Angebot technisch und wirtschaftlich zu verbessern. Mit Hilfe von Google Analytics erkennen wir Fehler der Website, können Attacken identifizieren und die Wirtschaftlichkeit verbessern. Die Rechtsgrundlage dafür ist <strong class="adsimple-112763364">Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</strong>. Wir setzen Google Analytics gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben.</p>
<p>Google verarbeitet Daten von Ihnen u.a. auch in den USA. Google ist aktiver Teilnehmer des EU-US Data Privacy Frameworks, wodurch der korrekte und sichere Datentransfer personenbezogener Daten von EU-Bürgern in die USA geregelt wird. Mehr Informationen dazu finden Sie auf <a class="adsimple-112763364" href="https://commission.europa.eu/document/fa09cbad-dd7d-4684-ae60-be03fcb0fddf_en" target="_blank" rel="follow noopener"> https://commission.europa.eu/document/fa09cbad-dd7d-4684-ae60-be03fcb0fddf_en</a>.</p>
<p>Zudem verwendet Google sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre Daten auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer (wie beispielsweise in die USA) überliefert und dort gespeichert werden. Durch das EU-US Data Privacy Framework und durch die Standardvertragsklauseln verpflichtet sich Google, bei der Verarbeitung Ihrer relevanten Daten, das europäische Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchführungsbeschluss der EU-Kommission. Sie finden den Beschluss und die entsprechenden Standardvertragsklauseln u.a. hier: <a class="adsimple-112763364" href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de" target="_blank" rel="follow noopener">https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de</a>
</p>
<p>Die Google Ads Datenverarbeitungsbedingungen (Google Ads Data Processing Terms), welche auf die Standardvertragsklauseln verweisen, finden Sie unter <a class="adsimple-112763364" href="https://business.safety.google/intl/de/adsprocessorterms/" target="_blank" rel="follow noopener">https://business.safety.google/intl/de/adsprocessorterms/</a>.</p>
<p>Wir hoffen, wir konnten Ihnen die wichtigsten Informationen rund um die Datenverarbeitung von Google Analytics näherbringen. Wenn Sie mehr über den Tracking-Dienst erfahren wollen, empfehlen wir diese beiden Links: <a class="adsimple-112763364" href="https://marketingplatform.google.com/about/analytics/terms/de/" target="_blank" rel="follow noopener">https://marketingplatform.google.com/about/analytics/terms/de/</a> und <a class="adsimple-112763364" href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="follow noopener">https://support.google.com/analytics/answer/6004245?hl=de</a>.</p>
<p>Wenn Sie mehr über die Datenverarbeitung erfahren wollen, nutzen Sie die Google-Datenschutzerklärung auf <a class="adsimple-112763364" href="https://policies.google.com/privacy?hl=de&amp;tid=112763364" target="_blank" rel="follow noopener">https://policies.google.com/privacy?hl=de</a>.</p>
<h2 id="auftragsverarbeitungsvertrag-avv-google-analytics" class="adsimple-112763364">Auftragsverarbeitungsvertrag (AVV) Google Analytics</h2>
<p>Wir haben im Sinne des Artikels 28 der Datenschutz-Grundverordnung (DSGVO) mit Google einen Auftragsverarbeitungsvertrag (AVV) abgeschlossen. Was ein AVV genau ist und vor allem was in einem AVV enthalten sein muss, können Sie in unserem allgemeinen Abschnitt „Auftragsverarbeitungsvertrag (AVV)“ nachlesen.</p>
<p>Dieser Vertrag ist gesetzlich vorgeschrieben, weil Google in unserem Auftrag personenbezogene Daten verarbeitet. Darin wird geklärt, dass Google Daten, die sie von uns erhalten, nur nach unserer Weisung verarbeiten darf und die DSGVO einhalten muss. Den Link zu den Auftragsdatenverarbeitungsbedingungen finden Sie unter <a class="adsimple-112763364" href="https://business.safety.google/intl/de/adsprocessorterms/" target="_blank" rel="follow noopener">https://business.safety.google/intl/de/adsprocessorterms/</a>
</p>
<h2 id="google-analytics-berichte-zu-demografischen-merkmalen-und-interessen" class="adsimple-112763364">Google Analytics Berichte zu demografischen Merkmalen und Interessen</h2>
<p>Wir haben in Google Analytics die Funktionen für Werbeberichte eingeschaltet. Die Berichte zu demografischen Merkmalen und Interessen enthalten Angaben zu Alter, Geschlecht und Interessen. Damit können wir uns &#8211; ohne diese Daten einzelnen Personen zuordnen zu können &#8211; ein besseres Bild von unseren Nutzern machen. Mehr über die Werbefunktionen erfahren Sie auf <a class="adsimple-112763364" href="https://support.google.com/analytics/answer/3450482?hl=de_AT&amp;utm_id=ad">https://support.google.com/analytics/answer/3450482?hl=de_AT&amp;utm_id=ad</a>.</p>
<p>Sie können die Nutzung der Aktivitäten und Informationen Ihres Google Kontos unter “Einstellungen für Werbung” auf <a class="adsimple-112763364" href="https://adssettings.google.com/authenticated">https://adssettings.google.com/authenticated</a> per Checkbox beenden.</p>
<h2 id="google-analytics-im-einwilligungsmodus" class="adsimple-112763364">Google Analytics im Einwilligungsmodus</h2>
<p>Abhängig von Ihrer Einwilligung werden im sogenannten Einwilligungsmodus (bzw. „Consent Mode“) personenbezogene Daten von Ihnen durch Google Analytics verarbeitet. Sie können wählen, ob Sie Google-Analytics-Cookies zustimmen oder nicht. Damit wählen Sie auch, welche Daten Google Analytics von Ihnen verarbeitet darf. Diese erhobenen Daten werden hauptsächlich dafür verwendet, Messungen über das Userverhalten auf der Website durchzuführen, zielgerichtete Werbung auszuspielen und uns Web-Analyseberichte zu liefern. In der Regel willigen Sie der Datenverarbeitung durch Google über ein Cookie-Consent-Tool ein. Wenn Sie der Datenverarbeitung nicht einwilligen, werden nur aggregierte Daten erfasst und verarbeitet. Das bedeutet, Daten können einzelnen Usern nicht zugeordnet werden und es entsteht somit kein Userprofil von Ihnen. Sie können auch nur der statistischen Messung zustimmen. Dabei werden keine personenbezogenen Daten verarbeitet und folglich nicht für Werbungen oder Werbemesserfolge verwendet.</p>
<h2 id="google-analytics-ip-anonymisierung" class="adsimple-112763364">Google Analytics IP-Anonymisierung</h2>
<p>Wir haben auf dieser Webseite die IP-Adressen-Anonymisierung von Google Analytics implementiert. Diese Funktion wurde von Google entwickelt, damit diese Webseite die geltenden Datenschutzbestimmungen und Empfehlungen der lokalen Datenschutzbehörden einhalten kann, wenn diese eine Speicherung der vollständigen IP-Adresse untersagen. Die Anonymisierung bzw. Maskierung der IP findet statt, sobald die IP-Adressen im Google Analytics-Datenerfassungsnetzwerk eintreffen und bevor eine Speicherung oder Verarbeitung der Daten stattfindet.</p>
<p>Mehr Informationen zur IP-Anonymisierung finden Sie auf <a class="adsimple-112763364" href="https://support.google.com/analytics/answer/2763052?hl=de" target="_blank" rel="noopener">https://support.google.com/analytics/answer/2763052?hl=de</a>.</p>
<h2 id="webdesign-einleitung" class="adsimple-112763364">Webdesign Einleitung</h2>
<table border="1" cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-112763364">Webdesign Datenschutzerklärung Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: Verbesserung der Nutzererfahrung<br />
&#x1f4d3; Verarbeitete Daten: Welche Daten verarbeitet werden, hängt stark von den verwendeten Diensten ab. Meist handelt es sich etwa um IP-Adresse, technische Daten, Spracheinstellungen,  Browserversion, Bildschirmauflösung und Name des Browsers. Mehr Details dazu finden Sie bei den jeweils eingesetzten Webdesign-Tools.<br />
&#x1f4c5; Speicherdauer: abhängig von den eingesetzten Tools<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="adsimple-112763364">Was ist Webdesign?</h3>
<p>Wir verwenden auf unserer Website verschiedene Tools, die unserem Webdesign dienen. Bei Webdesign geht es nicht, wie oft angenommen, nur darum, dass unsere Website hübsch aussieht, sondern auch um Funktionalität und Leistung. Aber natürlich ist die passende Optik einer Website auch eines der großen Ziele professionellen Webdesigns. Webdesign ist ein Teilbereich des Mediendesigns und beschäftigt sich sowohl mit der visuellen als auch der strukturellen und funktionalen Gestaltung einer Website. Ziel ist es mit Hilfe von Webdesign Ihre Erfahrung auf unserer Website zu verbessern. Im Webdesign-Jargon spricht man in diesem Zusammenhang von User-Experience (UX) und Usability. Unter User Experience versteht man alle Eindrücke und Erlebnisse, die der Websitebesucher auf einer Website erfährt. Ein Unterpunkt der User Experience ist die Usability. Dabei geht es um die Nutzerfreundlichkeit einer Website. Wert gelegt wird hier vor allem darauf, dass Inhalte, Unterseiten oder Produkte klar strukturiert sind und Sie leicht und schnell finden, wonach Sie suchen. Um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten, verwenden wir auch sogenannte Webdesign-Tools von Drittanbietern. Unter die Kategorie „Webdesign“ fallen in dieser Datenschutzerklärung also alle Dienste, die unsere Website gestalterisch verbessern. Das können beispielsweise Schriftarten, diverse Plugins oder andere eingebundene Webdesign-Funktionen sein.</p>
<h3 class="adsimple-112763364">Warum verwenden wir Webdesign-Tools?</h3>
<p>Wie Sie Informationen auf einer Website aufnehmen, hängt sehr stark von der Struktur, der Funktionalität und der visuellen Wahrnehmung der Website ab. Daher wurde auch für uns ein gutes und professionelles Webdesign immer wichtiger. Wir arbeiten ständig an der Verbesserung unserer Website und sehen dies auch als erweiterte Dienstleistung für Sie als Websitebesucher. Weiters hat eine schöne und funktionierende Website auch wirtschaftliche Vorteile für uns. Schließlich werden Sie uns nur besuchen und unsere Angebote in Anspruch nehmen, wenn Sie sich rundum wohl fühlen.</p>
<h3 class="adsimple-112763364">Welche Daten werden durch Webdesign-Tools gespeichert?</h3>
<p>Wenn Sie unsere Website besuchen, können Webdesign-Elemente in unseren Seiten eingebunden sein, die auch Daten verarbeiten können. Um welche Daten es sich genau handelt, hängt natürlich stark von den verwendeten Tools ab. Weiter unter sehen Sie genau, welche Tools wir für unsere Website verwenden. Wir empfehlen Ihnen für nähere Informationen über die Datenverarbeitung auch die jeweilige Datenschutzerklärung der verwendeten Tools durchzulesen. Meistens erfahren Sie dort, welche Daten verarbeitet werden, ob Cookies eingesetzt werden und wie lange die Daten aufbewahrt werden. Durch Schriftarten wie etwa Google Fonts werden beispielsweise auch Informationen wie Spracheinstellungen, IP-Adresse, Version des Browsers, Bildschirmauflösung des Browsers und Name des Browsers automatisch an die Google-Server übertragen.</p>
<h3 class="adsimple-112763364">Dauer der Datenverarbeitung</h3>
<p>Wie lange Daten verarbeitet werden, ist sehr individuell und hängt von den eingesetzten Webdesign-Elementen ab. Wenn Cookies beispielsweise zum Einsatz kommen, kann die Aufbewahrungsdauer nur eine Minute, aber auch ein paar Jahre dauern. Machen Sie sich diesbezüglich bitte schlau. Dazu empfehlen wir Ihnen einerseits unseren allgemeinen Textabschnitt über Cookies sowie die Datenschutzerklärungen der eingesetzten Tools. Dort erfahren Sie in der Regel, welche Cookies genau eingesetzt werden, und welche Informationen darin gespeichert werden. Google-Font-Dateien werden zum Beispiel ein Jahr gespeichert. Damit soll die Ladezeit einer Website verbessert werden. Grundsätzlich werden Daten immer nur so lange aufbewahrt, wie es für die Bereitstellung des Dienstes nötig ist. Bei gesetzlichen Vorschreibungen können Daten auch länger gespeichert werden.</p>
<h3 class="adsimple-112763364">Widerspruchsrecht</h3>
<p>Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies bzw. Drittanbietern zu widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Sie können auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten, deaktivieren oder löschen. Unter Webdesign-Elementen (meistens bei Schriftarten) gibt es allerdings auch Daten, die nicht ganz so einfach gelöscht werden können. Das ist dann der Fall, wenn Daten direkt bei einem Seitenaufruf automatisch erhoben und an einen Drittanbieter (wie z. B. Google) übermittelt werden. Wenden Sie sich dann bitte an den Support des entsprechenden Anbieters. Im Fall von Google erreichen Sie den Support unter <a class="adsimple-112763364" href="https://support.google.com/?hl=de">https://support.google.com/?hl=de</a>.</p>
<h3 class="adsimple-112763364">Rechtsgrundlage</h3>
<p>Wenn Sie eingewilligt haben, dass Webdesign-Tools eingesetzt werden dürfen, ist die Rechtsgrundlage der entsprechenden Datenverarbeitung diese Einwilligung. Diese Einwilligung stellt laut Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) die Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch Webdesign-Tools vorkommen kann, dar. Von unserer Seite besteht zudem ein berechtigtes Interesse, das Webdesign auf unserer Website zu verbessern. Schließlich können wir Ihnen nur dann ein schönes und professionelles Webangebot liefern. Die dafür entsprechende Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen). Wir setzen Webdesign-Tools gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben. Das wollen wir hier auf jeden Fall nochmals betonen.</p>
<p>Informationen zu speziellen Webdesign-Tools erhalten Sie &#8211; sofern vorhanden &#8211; in den folgenden Abschnitten.</p>
<h2 id="font-awesome-datenschutzerklaerung" class="adsimple-112763364">Font Awesome Datenschutzerklärung</h2>
<table border="1" cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-112763364">Font Awesome Datenschutzerklärung Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: Optimierung unserer Serviceleistung<br />
&#x1f4d3; Verarbeitete Daten: etwa IP-Adresse und und welche Icon-Dateien geladen werden<br />
Mehr Details dazu finden Sie weiter unten in dieser Datenschutzerklärung.<br />
&#x1f4c5; Speicherdauer: Dateien in identifizierbarer Form werden wenige Wochen gespeichert<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="adsimple-112763364">Was ist Font Awesome?</h3>
<p>Wir verwenden auf unserer Website Font Awesome des amerikanischen Unternehmens Fonticons (307 S. Main St., Suite 202, Bentonville, AR 72712, USA). Wenn Sie eine unserer Webseite aufrufen, wird die Web-Schriftart Font Awesome (im Speziellen Icons) über das Font Awesome Content Delivery Netzwerk (CDN) geladen. So werden die Texte bzw. Schriften und Icons auf jedem Endgerät passend angezeigt. In dieser Datenschutzerklärung gehen wir näher auf die Datenspeicherung und Datenverarbeitung durch diesen Service ein.</p>
<p>Icons spielen für Websites eine immer wichtigere Rolle. Font Awesome ist eine Web-Schriftart, die speziell für Webdesigner und Webentwickler entwickelt wurde. Mit Font Awesome können etwa Icons mit Hilfe der Stylesheet-Sprache CSS nach Belieben skaliert und gefärbt werden. Sie ersetzen so alte Bild-Icons. Font Awesome CDN ist der einfachste Weg die Icons oder Schriftarten auf Ihre Website zu laden. Dafür mussten wir nur eine kleine Code-Zeile in unsere Website einbinden.</p>
<h3 class="adsimple-112763364">Warum verwenden wir Font Awesome auf unserer Website?</h3>
<p>Durch Font Awesome können Inhalte auf unserer Website besser aufbereitet werden. So können Sie sich auf unserer Website besser orientieren und die Inhalte leichter erfassen. Mit den Icons kann man sogar manchmal ganze Wörter ersetzen und Platz sparen. Da ist besonders praktisch, wenn wir Inhalte speziell für Smartphones optimieren.  Diese Icons werden statt als Bild als HMTL-Code eingefügt. Dadurch können wir die Icons mit CSS genauso bearbeiten, wie wir wollen. Gleichzeitig verbessern wir mit Font Awesome auch unsere Ladegeschwindigkeit, weil es sich nur um HTML-Elemente handelt und nicht um Icon-Bilder. All diese Vorteile helfen uns, die Website für Sie noch übersichtlicher, frischer und schneller zu machen.</p>
<h3 class="adsimple-112763364">Welche Daten werden von Font Awesome gespeichert?</h3>
<p>Zum Laden von Icons und Symbolen wird das Font Awesome Content Delivery Network (CDN) verwendet. CDNs sind Netzwerke von Servern, die weltweit verteilt sind und es möglich machen, schnell Dateien aus der Nähe zu laden. So werden auch, sobald Sie eine unserer Seiten aufrufen, die entsprechenden Icons von Font Awesome bereitgestellt.</p>
<p>Damit die Web-Schriftarten geladen werden können, muss Ihr Browser eine Verbindung zu den Servern des Unternehmens Fonticons, Inc. herstellen. Dabei wird Ihre IP-Adresse erkannt. Font Awesome sammelt auch Daten darüber, welche Icon-Dateien wann heruntergeladen werden. Weiters werden auch technische Daten wie etwa Ihre Browser-Version, Bildschirmauflösung oder der Zeitpunkt der ausgerufenen Seite übertragen.</p>
<p>Aus folgenden Gründen werden diese Daten gesammelt und gespeichert:</p>
<ul class="adsimple-112763364">
<li class="adsimple-112763364">um Content Delivery Netzwerke zu optimieren</li>
<li class="adsimple-112763364">um technische Fehler zu erkennen und zu beheben</li>
<li class="adsimple-112763364">um CDNs vor Missbrauch und Angriffen zu schützen</li>
<li class="adsimple-112763364">um Gebühren von Font Awesome Pro-Kunden berechnen zu können</li>
<li class="adsimple-112763364">um die Beliebtheit von Icons zu erfahren</li>
<li class="adsimple-112763364">um zu wissen, welchen Computer und welche Software Sie verwenden</li>
</ul>
<p>Falls Ihr Browser Web-Schriftarten nicht zulässt, wird automatisch eine Standardschrift Ihres PCs verwendet. Nach derzeitigem Stand unserer Erkenntnis werden keine Cookies gesetzt. Wir sind mit der Datenschutzabteilung von Font Awesome in Kontakt und geben Ihnen Bescheid, sobald wir näheres in Erfahrung bringen.</p>
<h3 class="adsimple-112763364">Wie lange und wo werden die Daten gespeichert?</h3>
<p>Font Awesome speichert Daten über die Nutzung des Content Delivery Network auf Servern auch in den Vereinigten Staaten von Amerika. Die CDN-Server befinden sich allerdings weltweit und speichern Userdaten, wo Sie sich befinden. In identifizierbarer Form werden die Daten in der Regel nur wenige Wochen gespeichert. Aggregierte Statistiken über die Nutzung von den CDNs können auch länger gespeichert werden. Personenbezogene Daten sind hier nicht enthalten.</p>
<h3 class="adsimple-112763364">Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
<p>Font Awesome speichert nach aktuellem Stand unseres Wissens keine personenbezogenen Daten über die Content Delivery Netzwerke. Wenn Sie nicht wollen, dass Daten über die verwendeten Icons gespeichert werden, können Sie leider unsere Website nicht besuchen. Wenn Ihr Browser keine Web-Schriftarten erlaubt, werden auch keine Daten übertragen oder gespeichert. In diesem Fall wird einfach die Standard-Schrift Ihres Computers verwendet.</p>
<h3 class="adsimple-112763364">Rechtsgrundlage</h3>
<p>Wenn Sie eingewilligt haben, dass Font Awesome eingesetzt werden darf, ist die Rechtsgrundlage der entsprechenden Datenverarbeitung diese Einwilligung. Diese Einwilligung stellt laut<strong class="adsimple-112763364"> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong> die Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch Font Awesome vorkommen kann, dar.</p>
<p>Von unserer Seite besteht zudem ein berechtigtes Interesse, Font Awesome zu verwenden, um unser Online-Service zu optimieren. Die dafür entsprechende Rechtsgrundlage ist <strong class="adsimple-112763364">Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</strong>. Wir setzen Font Awesome gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben.</p>
<p>Wir weisen darauf hin, dass nach Meinung des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Die Datenverarbeitung geschieht im Wesentlichen durch Font Awesome. Dies kann dazu führen, dass gegebenenfalls Daten nicht anonymisiert verarbeitet und gespeichert werden. Ferner können gegebenenfalls US-amerikanische staatliche Behörden Zugriff auf einzelne Daten nehmen. Es kann ferner vorkommen, dass diese Daten mit Daten aus möglichen anderen Diensten von Font Awesome, bei denen Sie ein Nutzerkonto haben, verknüpft werden.</p>
<p>Wenn Sie mehr über Font Awesome und deren Umgang mit Daten erfahren wollen, empfehlen wir Ihnen die Datenschutzerklärung unter <a class="adsimple-112763364" href="https://fontawesome.com/privacy">https://fontawesome.com/privacy</a> und die Hilfeseite unter <a class="adsimple-112763364" href="https://fontawesome.com/support" target="_blank" rel="follow noopener">https://fontawesome.com/support</a>.</p>
<h2 id="google-fonts-datenschutzerklaerung" class="adsimple-112763364">Google Fonts Datenschutzerklärung</h2>
<table border="1" cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-112763364">Google Fonts Datenschutzerklärung Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: Optimierung unserer Serviceleistung<br />
&#x1f4d3; Verarbeitete Daten: Daten wie etwa IP-Adresse und CSS- und Schrift-Anfragen<br />
Mehr Details dazu finden Sie weiter unten in dieser Datenschutzerklärung.<br />
&#x1f4c5; Speicherdauer: Font-Dateien werden bei Google ein Jahr gespeichert<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="adsimple-112763364">Was sind Google Fonts?</h3>
<p>Auf unserer Website verwenden wir Google Fonts. Das sind die &#8220;Google-Schriften&#8221; der Firma Google Inc. Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) für alle Google-Dienste verantwortlich.</p>
<p>Für die Verwendung von Google-Schriftarten müssen Sie sich nicht anmelden bzw. ein Passwort hinterlegen. Weiters werden auch keine Cookies in Ihrem Browser gespeichert. Die Dateien (CSS, Schriftarten/Fonts) werden über die Google-Domains fonts.googleapis.com und fonts.gstatic.com angefordert. Laut Google sind die Anfragen nach CSS und Schriften vollkommen getrennt von allen anderen Google-Diensten. Wenn Sie ein Google-Konto haben, brauchen Sie keine Sorge haben, dass Ihre Google-Kontodaten, während der Verwendung von Google Fonts, an Google übermittelt werden. Google erfasst die Nutzung von CSS (Cascading Style Sheets) und der verwendeten Schriftarten und speichert diese Daten sicher. Wie die Datenspeicherung genau aussieht, werden wir uns noch im Detail ansehen.</p>
<p>Google Fonts (früher Google Web Fonts) ist ein Verzeichnis mit über 800 Schriftarten, die <a class="adsimple-112763364" href="https://de.wikipedia.org/wiki/Google_LLC?tid=112763364">Google</a> Ihren Nutzern kostenlos zu Verfügung stellen.</p>
<p>Viele dieser Schriftarten sind unter der SIL Open Font License veröffentlicht, während andere unter der Apache-Lizenz veröffentlicht wurden. Beides sind freie Software-Lizenzen.</p>
<h3 class="adsimple-112763364">Warum verwenden wir Google Fonts auf unserer Website?</h3>
<p>Mit Google Fonts können wir auf der eigenen Webseite Schriften nutzen, und müssen sie nicht auf unserem eigenen Server hochladen. Google Fonts ist ein wichtiger Baustein, um die Qualität unserer Webseite hoch zu halten. Alle Google-Schriften sind automatisch für das Web optimiert und dies spart Datenvolumen und ist speziell für die Verwendung bei mobilen Endgeräten ein großer Vorteil. Wenn Sie unsere Seite besuchen, sorgt die niedrige Dateigröße für eine schnelle Ladezeit. Des Weiteren sind Google Fonts sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme (Rendering) in verschiedenen Browsern, Betriebssystemen und mobilen Endgeräten können zu Fehlern führen. Solche Fehler können teilweise Texte bzw. ganze Webseiten optisch verzerren. Dank des schnellen Content Delivery Network (CDN) gibt es mit Google Fonts keine plattformübergreifenden Probleme. Google Fonts unterstützt alle gängigen Browser (Google Chrome, Mozilla Firefox, Apple Safari, Opera) und funktioniert zuverlässig auf den meisten modernen mobilen Betriebssystemen, einschließlich Android 2.2+ und iOS 4.2+ (iPhone, iPad, iPod). Wir verwenden die Google Fonts also, damit wir unser gesamtes Online-Service so schön und einheitlich wie möglich darstellen können.</p>
<h3 class="adsimple-112763364">Welche Daten werden von Google gespeichert?</h3>
<p>Wenn Sie unsere Webseite besuchen, werden die Schriften über einen Google-Server nachgeladen. Durch diesen externen Aufruf werden Daten an die Google-Server übermittelt. So erkennt Google auch, dass Sie bzw. Ihre IP-Adresse unsere Webseite besucht. Die Google Fonts API wurde entwickelt, um Verwendung, Speicherung und Erfassung von Endnutzerdaten auf das zu reduzieren, was für eine ordentliche Bereitstellung von Schriften nötig ist. API steht übrigens für „Application Programming Interface“ und dient unter anderem als Datenübermittler im Softwarebereich.</p>
<p>Google Fonts speichert CSS- und Schrift-Anfragen sicher bei Google und ist somit geschützt. Durch die gesammelten Nutzungszahlen kann Google feststellen, wie gut die einzelnen Schriften ankommen. Die Ergebnisse veröffentlicht Google auf internen Analyseseiten, wie beispielsweise Google Analytics. Zudem verwendet Google auch Daten des eigenen Web-Crawlers, um festzustellen, welche Webseiten Google-Schriften verwenden. Diese Daten werden in der BigQuery-Datenbank von Google Fonts veröffentlicht. Unternehmer und Entwickler nützen das Google-Webservice BigQuery, um große Datenmengen untersuchen und bewegen zu können.</p>
<p>Zu bedenken gilt allerdings noch, dass durch jede Google Font Anfrage auch Informationen wie Spracheinstellungen, IP-Adresse, Version des Browsers, Bildschirmauflösung des Browsers und Name des Browsers automatisch an die Google-Server übertragen werden. Ob diese Daten auch gespeichert werden, ist nicht klar feststellbar bzw. wird von Google nicht eindeutig kommuniziert.</p>
<h3 class="adsimple-112763364">Wie lange und wo werden die Daten gespeichert?</h3>
<p>Anfragen für CSS-Assets speichert Google einen Tag lang auf seinen Servern, die hauptsächlich außerhalb der EU angesiedelt sind. Das ermöglicht uns, mithilfe eines Google-Stylesheets die Schriftarten zu nutzen. Ein Stylesheet ist eine Formatvorlage, über die man einfach und schnell z.B. das Design bzw. die Schriftart einer Webseite ändern kann.</p>
<p>Die Font-Dateien werden bei Google ein Jahr gespeichert. Google verfolgt damit das Ziel, die Ladezeit von Webseiten grundsätzlich zu verbessern. Wenn Millionen von Webseiten auf die gleichen Schriften verweisen, werden sie nach dem ersten Besuch zwischengespeichert und erscheinen sofort auf allen anderen später besuchten Webseiten wieder. Manchmal aktualisiert Google Schriftdateien, um die Dateigröße zu reduzieren, die Abdeckung von Sprache zu erhöhen und das Design zu verbessern.</p>
<h3 class="adsimple-112763364">Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
<p>Jene Daten, die Google für einen Tag bzw. ein Jahr speichert können nicht einfach gelöscht werden. Die Daten werden beim Seitenaufruf automatisch an Google übermittelt. Um diese Daten vorzeitig löschen zu können, müssen Sie den Google-Support auf <a class="adsimple-112763364" href="https://support.google.com/?hl=de&amp;tid=112763364">https://support.google.com/?hl=de&amp;tid=112763364</a> kontaktieren. Datenspeicherung verhindern Sie in diesem Fall nur, wenn Sie unsere Seite nicht besuchen.</p>
<p>Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf <a class="adsimple-112763364" href="https://developers.google.com/fonts/faq?tid=112763364">https://developers.google.com/fonts/faq?tid=112763364</a>. Dort geht zwar Google auf datenschutzrelevante Angelegenheiten ein, doch wirklich detaillierte Informationen über Datenspeicherung sind nicht enthalten. Es ist relativ schwierig, von Google wirklich präzise Informationen über gespeicherten Daten zu bekommen.</p>
<h3 class="adsimple-112763364">Rechtsgrundlage</h3>
<p>Wenn Sie eingewilligt haben, dass Google Fonts eingesetzt werden darf, ist die Rechtsgrundlage der entsprechenden Datenverarbeitung diese Einwilligung. Diese Einwilligung stellt laut<strong class="adsimple-112763364"> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong> die Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch Google Fonts vorkommen kann, dar.</p>
<p>Von unserer Seite besteht zudem ein berechtigtes Interesse, Google Font zu verwenden, um unser Online-Service zu optimieren. Die dafür entsprechende Rechtsgrundlage ist <strong class="adsimple-112763364">Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</strong>. Wir setzen Google Font gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben.</p>
<p>Google verarbeitet Daten von Ihnen u.a. auch in den USA. Google ist aktiver Teilnehmer des EU-US Data Privacy Frameworks, wodurch der korrekte und sichere Datentransfer personenbezogener Daten von EU-Bürgern in die USA geregelt wird. Mehr Informationen dazu finden Sie auf <a class="adsimple-112763364" href="https://commission.europa.eu/document/fa09cbad-dd7d-4684-ae60-be03fcb0fddf_en" target="_blank" rel="follow noopener"> https://commission.europa.eu/document/fa09cbad-dd7d-4684-ae60-be03fcb0fddf_en</a>.</p>
<p>Zudem verwendet Google sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre Daten auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer (wie beispielsweise in die USA) überliefert und dort gespeichert werden. Durch das EU-US Data Privacy Framework und durch die Standardvertragsklauseln verpflichtet sich Google, bei der Verarbeitung Ihrer relevanten Daten, das europäische Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchführungsbeschluss der EU-Kommission. Sie finden den Beschluss und die entsprechenden Standardvertragsklauseln u.a. hier: <a class="adsimple-112763364" href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de" target="_blank" rel="follow noopener">https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de</a>
</p>
<p>Die Google Ads Datenverarbeitungsbedingungen (Google Ads Data Processing Terms), welche auf die Standardvertragsklauseln verweisen, finden Sie unter <a class="adsimple-112763364" href="https://business.safety.google/intl/de/adsprocessorterms/" target="_blank" rel="follow noopener">https://business.safety.google/intl/de/adsprocessorterms/</a>.</p>
<p>Welche Daten grundsätzlich von Google erfasst werden und wofür diese Daten verwendet werden, können Sie auch auf <a class="adsimple-112763364" href="https://policies.google.com/privacy?hl=de&amp;tid=112763364">https://www.google.com/intl/de/policies/privacy/</a> nachlesen.</p>
<h2 id="google-fonts-lokal-datenschutzerklaerung" class="adsimple-112763364">Google Fonts Lokal Datenschutzerklärung</h2>
<p>Auf unserer Website nutzen wir Google Fonts der Firma Google Inc. Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) verantwortlich. Wir haben die Google-Schriftarten lokal, d.h. auf unserem Webserver &#8211; nicht auf den Servern von Google &#8211; eingebunden. Dadurch gibt es keine Verbindung zu Google-Servern und somit auch keine Datenübertragung oder Speicherung.</p>
<h3 class="adsimple-112763364">Was sind Google Fonts?</h3>
<p>Früher nannte man Google Fonts auch Google Web Fonts. Dabei handelt es sich um ein interaktives Verzeichnis mit über 800 Schriftarten, die <a class="adsimple-112763364" href="https://de.wikipedia.org/wiki/Google_LLC?tid=112763364">Google</a> kostenlos bereitstellt. Mit Google Fonts könnte man Schriften nutzen, ohne sie auf den eigenen Server hochzuladen. Doch um diesbezüglich jede Informationsübertragung zu Google-Servern zu unterbinden, haben wir die Schriftarten auf unseren Server heruntergeladen. Auf diese Weise handeln wir datenschutzkonform und senden keine Daten an Google Fonts weiter.</p>
<h2 id="erklaerung-verwendeter-begriffe" class="adsimple-112763364">Erklärung verwendeter Begriffe</h2>
<p>Wir sind stets bemüht unsere Datenschutzerklärung so klar und verständlich wie möglich zu verfassen. Besonders bei technischen und rechtlichen Themen ist das allerdings nicht immer ganz einfach. Es macht oft Sinn juristische Begriffe (wie z. B. personenbezogene Daten) oder bestimmte technische Ausdrücke (wie z. B. Cookies, IP-Adresse) zu verwenden. Wir möchte diese aber nicht ohne Erklärung verwenden. Nachfolgend finden Sie nun eine alphabetische Liste von wichtigen verwendeten Begriffen, auf die wir in der bisherigen Datenschutzerklärung vielleicht noch nicht ausreichend eingegangen sind. Falls diese Begriffe der DSGVO entnommen wurden und es sich um Begriffsbestimmungen handelt, werden wir hier auch die DSGVO-Texte anführen und gegebenenfalls noch eigene Erläuterungen hinzufügen.</p>
<h2 id="auftragsverarbeiter" class="adsimple-112763364">Auftragsverarbeiter</h2>
<p>
<strong class="adsimple-112763364">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
</p>
<p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
<blockquote>
<p>
<em>
<strong class="adsimple-112763364">„Auftragsverarbeiter“</strong> eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet;</em>
</p>
</blockquote>
<p>
<strong class="adsimple-112763364">Erläuterung:</strong> Wir sind als Unternehmen und Websiteinhaber für alle Daten, die wir von Ihnen verarbeiten verantwortlich. Neben den Verantwortlichen kann es auch sogenannte Auftragsverarbeiter geben. Dazu zählt jedes Unternehmen bzw. jede Person, die in unserem Auftrag personenbezogene Daten verarbeitet. Auftragsverarbeiter können folglich, neben Dienstleistern wie Steuerberater, etwa auch Hosting- oder Cloudanbieter, Bezahlungs- oder Newsletter-Anbieter oder große Unternehmen wie beispielsweise Google oder Microsoft sein.</p>
<h2 id="einwilligung" class="adsimple-112763364">Einwilligung</h2>
<p>
<strong class="adsimple-112763364">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
</p>
<p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
<blockquote>
<p>
<em>
<strong class="adsimple-112763364">„Einwilligung“</strong> der betroffenen Person jede freiwillig für den bestimmten Fall, in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist;</em>
</p>
</blockquote>
<p>
<strong class="adsimple-112763364">Erläuterung: </strong>In der Regel erfolgt bei Websites eine solche Einwilligung über ein Cookie-Consent-Tool. Sie kennen das bestimmt. Immer wenn Sie erstmals eine Website besuchen, werden Sie meist über einen Banner gefragt, ob Sie der Datenverarbeitung zustimmen bzw. einwilligen. Meist können Sie auch individuelle Einstellungen treffen und so selbst entscheiden, welche Datenverarbeitung Sie erlauben und welche nicht. Wenn Sie nicht einwilligen, dürfen auch keine personenbezogene Daten von Ihnen verarbeitet werden. Grundsätzlich kann eine Einwilligung natürlich auch schriftlich, also nicht über ein Tool, erfolgen.</p>
<h2 id="personenbezogene-daten" class="adsimple-112763364">Personenbezogene Daten</h2>
<p>
<strong class="adsimple-112763364">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
</p>
<p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
<blockquote>
<p>
<strong class="adsimple-112763364">
<em>„personenbezogene Daten“</em>
</strong>
<em> alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann;</em>
</p>
</blockquote>
<p>
<strong class="adsimple-112763364">Erläuterung:</strong> Personenbezogene Daten sind also all jene Daten, die Sie als Person identifizieren können. Das sind in der Regel Daten wie etwa:</p>
<ul class="adsimple-112763364">
<li class="adsimple-112763364">Name</li>
<li class="adsimple-112763364">Adresse</li>
<li class="adsimple-112763364">E-Mail-Adresse</li>
<li class="adsimple-112763364">Post-Anschrift</li>
<li class="adsimple-112763364">Telefonnummer</li>
<li class="adsimple-112763364">Geburtsdatum</li>
<li class="adsimple-112763364">Kennnummern wie Sozialversicherungsnummer, Steueridentifikationsnummer, Personalausweisnummer oder Matrikelnummer</li>
<li class="adsimple-112763364">Bankdaten wie Kontonummer, Kreditinformationen, Kontostände uvm.</li>
</ul>
<p>Laut Europäischem Gerichtshof (EuGH) zählt auch Ihre <strong class="adsimple-112763364">IP-Adresse zu den personenbezogenen Daten</strong>. IT-Experten können anhand Ihrer IP-Adresse zumindest den ungefähren Standort Ihres Geräts und in weiterer Folge Sie als Anschlussinhabers feststellen. Daher benötigt auch das Speichern einer IP-Adresse eine Rechtsgrundlage im Sinne der DSGVO. Es gibt auch noch sogenannte <strong class="adsimple-112763364">„besondere Kategorien“</strong> der personenbezogenen Daten, die auch besonders schützenswert sind. Dazu zählen:</p>
<ul class="adsimple-112763364">
<li class="adsimple-112763364">rassische und ethnische Herkunft</li>
<li class="adsimple-112763364">politische Meinungen</li>
<li class="adsimple-112763364">religiöse bzw. weltanschauliche Überzeugungen</li>
<li class="adsimple-112763364">die Gewerkschaftszugehörigkeit</li>
<li class="adsimple-112763364">genetische Daten wie beispielsweise Daten, die aus Blut- oder Speichelproben entnommen werden</li>
<li class="adsimple-112763364">biometrische Daten (das sind Informationen zu psychischen, körperlichen oder verhaltenstypischen Merkmalen, die eine Person identifizieren können).<br />
Gesundheitsdaten</li>
<li class="adsimple-112763364">Daten zur sexuellen Orientierung oder zum Sexualleben</li>
</ul>
<h2 id="profiling" class="adsimple-112763364">Profiling</h2>
<p>
<strong class="adsimple-112763364">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
</p>
<p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
<blockquote>
<p>
<em>
<strong class="adsimple-112763364">„Profiling“</strong> jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen;</em>
</p>
</blockquote>
<p>
<strong class="adsimple-112763364">Erläuterung:</strong> Beim Profiling werden verschiedene Informationen über eine Person zusammengetragen, um daraus mehr über diese Person zu erfahren. Im Webbereich wird Profiling häufig für Werbezwecke oder auch für Bonitätsprüfungen angewandt. Web- bzw. Werbeanalyseprogramme sammeln zum Beispiel Daten über Ihre Verhalten und Ihre Interessen auf einer Website. Daraus ergibt sich ein spezielles Userprofil, mit dessen Hilfe Werbung gezielt an eine Zielgruppe ausgespielt werden kann.</p>
<p>&nbsp;</p>
<h2 id="verantwortlicher" class="adsimple-112763364">Verantwortlicher</h2>
<p>
<strong class="adsimple-112763364">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
</p>
<p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
<blockquote>
<p>
<em>
<strong class="adsimple-112763364">„Verantwortlicher“</strong> die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet; sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden;</em>
</p>
</blockquote>
<p>
<strong class="adsimple-112763364">Erläuterung:</strong> In unserem Fall sind wir für die Verarbeitung Ihrer personenbezogenen Daten verantwortlich und folglich der &#8220;Verantwortliche&#8221;. Wenn wir erhobene Daten zur Verarbeitung an andere Dienstleister weitergeben, sind diese &#8220;Auftragsverarbeiter&#8221;. Dafür muss ein &#8220;Auftragsverarbeitungsvertrag (AVV)&#8221; unterzeichnet werden.</p>
<p>&nbsp;</p>
<h2 id="verarbeitung" class="adsimple-112763364">Verarbeitung</h2>
<p>
<strong class="adsimple-112763364">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
</p>
<p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
<blockquote>
<p>
<strong class="adsimple-112763364">
<em>„Verarbeitung“</em>
</strong>
<em> jeden mit oder ohne Hilfe automatisierter Verfahren ausgeführten Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung;</em>
</p>
</blockquote>
<p>
<strong class="adsimple-112763364">Anmerkung: </strong>Wenn wir in unserer Datenschutzerklärung von Verarbeitung sprechen, meinen wir damit jegliche Art von Datenverarbeitung. Dazu zählt, wie oben in der originalen DSGVO-Erklärung erwähnt, nicht nur das Erheben sondern auch das Speichern und Verarbeiten von Daten.</p>
<h2 id="schlusswort" class="adsimple-112763364">Schlusswort</h2>
<p>Herzlichen Glückwunsch! Wenn Sie diese Zeilen lesen, haben Sie sich wirklich durch unsere gesamte Datenschutzerklärung „gekämpft“ oder zumindest bis hier hin gescrollt. Wie Sie am Umfang unserer Datenschutzerklärung sehen, nehmen wir den Schutz Ihrer persönlichen Daten, alles andere als auf die leichte Schulter.<br />
Uns ist es wichtig, Sie nach bestem Wissen und Gewissen über die Verarbeitung personenbezogener Daten zu informieren. Dabei wollen wir Ihnen aber nicht nur mitteilen, welche Daten verarbeitet werden, sondern auch die Beweggründe für die Verwendung diverser Softwareprogramme näherbringen. In der Regel klingen Datenschutzerklärung sehr technisch und juristisch. Da die meisten von Ihnen aber keine Webentwickler oder Juristen sind, wollten wir auch sprachlich einen anderen Weg gehen und den Sachverhalt in einfacher und klarer Sprache erklären. Immer ist dies natürlich aufgrund der Thematik nicht möglich. Daher werden die wichtigsten Begriffe am Ende der Datenschutzerklärung näher erläutert.<br />
Bei Fragen zum Thema Datenschutz auf unserer Website zögern Sie bitte nicht, uns oder die verantwortliche Stelle zu kontaktieren. Wir wünschen Ihnen noch eine schöne Zeit und hoffen, Sie auf unserer Website bald wieder begrüßen zu dürfen.</p>
<p>Alle Texte sind urheberrechtlich geschützt.</p>
<p style={{marginTop:'15px'}}>Quelle: Erstellt mit dem <a href="https://www.adsimple.at/datenschutz-generator/" title="Datenschutz Generator Österreich von AdSimple">Datenschutz Generator</a> von AdSimple</p>

</div>
</div>
	
    <div  style={{ backgroundColor: '#c1b3a5' }} className="banner"></div>
  </div>

    
  );
};

export default Datenschutz;