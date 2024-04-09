import React, { useState } from 'react';
import KontaktForm from './KontaktForm.js'; // Pfad anpassen
import './css/agb.css'; // Stellen Sie sicher, dass Sie diese CSS-Datei für das Styling erstellen
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../effekts/LanguageProvider.js';

// Inhalte für jede Sprache


const AGB = () => {
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
	{language === 'de' && (
	<div>
				<ol>
			<li><strong>Allgemeine Grundlagen / Geltungsbereich</strong></li>
			</ol>
			<p>&nbsp;</p>
			<p>1.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; F&uuml;r s&auml;mtliche Rechtsgesch&auml;fte zwischen dem/der Auftraggeber:in und der Auftragnehmerin (Unternehmensberaterin) &ndash; im Folgenden wird nur die Bezeichnung Auftragnehmerin verwendet - gelten ausschlie&szlig;lich diese Allgemeinen Gesch&auml;ftsbedingungen. Ma&szlig;geblich ist jeweils die zum Zeitpunkt des Vertragsabschlusses g&uuml;ltige Fassung.</p>
			<p>&nbsp;</p>
			<p>1.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Diese Allgemeinen Gesch&auml;ftsbedingungen gelten auch f&uuml;r alle k&uuml;nftigen Vertragsbeziehungen, somit auch dann, wenn bei Zusatzvertr&auml;gen darauf nicht ausdr&uuml;cklich hingewiesen wird.</p>
			<p>&nbsp;</p>
			<p>1.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Entgegenstehende Allgemeine Gesch&auml;ftsbedingungen des/der Auftraggebers:in sind ung&uuml;ltig, es sei denn, diese werden vom/von der Auftragnehmerin ausdr&uuml;cklich schriftlich anerkannt.</p>
			<p>&nbsp;</p>
			<p>1.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; F&uuml;r den Fall, dass einzelne Bestimmungen dieser Allgemeinen Gesch&auml;ftsbedingungen unwirksam sein und/oder werden sollten, ber&uuml;hrt dies die Wirksamkeit der verbleibenden Bestimmungen und der unter ihrer Zugrundelegung geschlossenen Vertr&auml;ge nicht. Die unwirksame ist durch eine wirksame Bestimmung, die ihr dem Sinn und wirtschaftlichen Zweck nach am n&auml;chsten kommt, zu ersetzen.</p>
			<p>&nbsp;</p>
			<ol start="2">
			<li><strong>Umfang des Beratungsauftrages / Stellvertretung</strong></li>
			</ol>
			<p>&nbsp;</p>
			<p>2.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Der Umfang eines konkreten Beratungsauftrages wird im Einzelfall vertraglich vereinbart.</p>
			<p>&nbsp;</p>
			<p>2.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Die Auftragnehmerin ist berechtigt, die ihr obliegenden Aufgaben ganz oder teilweise durch Dritte erbringen zu lassen. Die Bezahlung des Dritten erfolgt ausschlie&szlig;lich durch die Auftragnehmerin selbst. Es entsteht kein wie immer geartetes direktes Vertragsverh&auml;ltnis zwischen dem Dritten und dem/der Auftraggeber:in.</p>
			<p>&nbsp;</p>
			<p>2.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Der/die Auftraggeber:in verpflichtet sich, w&auml;hrend sowie bis zum Ablauf von drei Jahren nach Beendigung dieses Vertragsverh&auml;ltnisses keine wie immer geartete Gesch&auml;ftsbeziehung zu Personen oder Gesellschaften einzugehen, deren sich die Auftragnehmerin zur Erf&uuml;llung seiner vertraglichen Pflichten bedient. Der/die Auftraggeber:in wird diese Personen und Gesellschaften insbesondere nicht mit solchen oder &auml;hnlichen Beratungsleistungen beauftragen, die auch die Auftragnehmerin anbietet.</p>
			<p>&nbsp;</p>
			<ol start="3">
			<li><strong>Aufkl&auml;rungspflicht des/der Auftraggebers:in / Vollst&auml;ndigkeitserkl&auml;rung</strong></li>
			</ol>
			<p>&nbsp;</p>
			<p>3.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Der/die Auftraggeber:in sorgt daf&uuml;r, dass die organisatorischen Rahmenbedingungen bei Erf&uuml;llung des Beratungsauftrages an seinem/ihrem Gesch&auml;ftssitz ein m&ouml;glichst ungest&ouml;rtes, dem raschen Fortgang des Beratungsprozesses f&ouml;rderliches Arbeiten erlauben.</p>
			<p>&nbsp;</p>
			<p>3.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Der/die Auftraggeber:in wird die Auftragnehmerin auch &uuml;ber vorher durchgef&uuml;hrte und/oder laufende Beratungen &ndash; auch auf anderen Fachgebieten &ndash; umfassend informieren.</p>
			<p>&nbsp;</p>
			<p>3.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Der/die Auftraggeber:in sorgt daf&uuml;r, dass der Auftragnehmerin auch ohne dessen besondere Aufforderung alle f&uuml;r die Erf&uuml;llung und Ausf&uuml;hrung des Beratungsauftrages notwendigen Unterlagen zeitgerecht vorgelegt werden und ihr von allen Vorg&auml;ngen und Umst&auml;nden Kenntnis gegeben wird, die f&uuml;r die Ausf&uuml;hrung des Beratungsauftrages von Bedeutung sind. Dies gilt auch f&uuml;r alle Unterlagen, Vorg&auml;nge und Umst&auml;nde, die erst w&auml;hrend der T&auml;tigkeit der Beraterin bekannt werden.</p>
			<p>&nbsp;</p>
			<p>3.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Der/die Auftraggeber:in sorgt daf&uuml;r, dass seine/ihre Mitarbeiter:innen und die gesetzlich vorgesehene und gegebenenfalls eingerichtete Arbeitnehmervertretung (Betriebsrat) bereits vor Beginn der T&auml;tigkeit des/der Auftragnehmers:in von dieser informiert werden.</p>
			<p>&nbsp;</p>
			<ol start="4">
			<li><strong>Sicherung der Unabh&auml;ngigkeit</strong></li>
			</ol>
			<p>&nbsp;</p>
			<p>4.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Die Vertragsparteien verpflichten sich zur gegenseitigen Loyalit&auml;t.</p>
			<p>&nbsp;</p>
			<p>4.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Die Vertragsparteien verpflichten sich gegenseitig, alle Vorkehrungen zu treffen, die geeignet sind, die Gef&auml;hrdung der Unabh&auml;ngigkeit der beauftragten Dritten und Mitarbeiter:innen der Auftragnehmerin zu verhindern. Dies gilt insbesondere f&uuml;r Angebote des/der Auftraggebers:in auf Anstellung bzw. der &Uuml;bernahme von Auftr&auml;gen auf eigene Rechnung.</p>
			<p>&nbsp;</p>
			<ol start="5">
			<li><strong>Berichterstattung / Berichtspflicht</strong></li>
			</ol>
			<p>&nbsp;</p>
			<p>5.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Die Auftragnehmerin verpflichtet sich, &uuml;ber ihre Arbeit, die ihrer Mitarbeiter:innen und gegebenenfalls auch die beauftragter Dritter dem Arbeitsfortschritt entsprechend dem/der Auftraggeber:in Bericht zu erstatten.</p>
			<p>&nbsp;</p>
			<p>5.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Den Schlussbericht erh&auml;lt der/die Auftraggeber:in in angemessener Zeit, d.h. zwei bis vier&nbsp;Wochen, je nach Art und Umfang des Beratungsauftrages nach Abschluss des Auftrages.</p>
			<p>&nbsp;</p>
			<p>5.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Die Auftragnehmerin ist bei der Herstellung des vereinbarten Werkes weisungsfrei, handelt nach eigenem Gutd&uuml;nken und in eigener Verantwortung. Sie ist an keinen bestimmten Arbeitsort und keine bestimmte Arbeitszeit gebunden.</p>
			<p>&nbsp;</p>
			<ol start="6">
			<li><strong>Schutz des geistigen Eigentums</strong></li>
			</ol>
			<p>&nbsp;</p>
			<p>6.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Die Urheberrechte an den von der Auftragnehmerin und ihren Mitarbeiter:innen und beauftragten Dritten geschaffenen Werke (insbesondere Anbote, Berichte, Analysen, Gutachten, Organisationspl&auml;ne, Programme, Leistungsbeschreibungen, Entw&uuml;rfe, Berechnungen, Zeichnungen, Datentr&auml;ger etc.) verbleiben bei der Auftragnehmerin. Sie d&uuml;rfen vom/von der Auftraggeber:in w&auml;hrend und nach Beendigung des Vertragsverh&auml;ltnisses ausschlie&szlig;lich f&uuml;r vom Vertrag umfasste Zwecke verwendet werden. Der/die Auftraggeber:in ist insofern nicht berechtigt, das Werk (die Werke) ohne ausdr&uuml;ckliche Zustimmung der Auftragnehmerin zu vervielf&auml;ltigen und/oder zu verbreiten. Keinesfalls entsteht durch eine unberechtigte Vervielf&auml;ltigung/Verbreitung des Werkes eine Haftung der Auftragnehmerin &ndash; insbesondere etwa f&uuml;r die Richtigkeit des Werkes &ndash; gegen&uuml;ber Dritten.</p>
			<p>&nbsp;</p>
			<p>6.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Der Versto&szlig; des/der Auftraggebers:in gegen diese Bestimmungen berechtigt die Auftragnehmerin zur sofortigen vorzeitigen Beendigung des Vertragsverh&auml;ltnisses und zur Geltendmachung anderer gesetzlicher Anspr&uuml;che, insbesondere auf Unterlassung und/oder Schadenersatz.</p>
			<p>&nbsp;</p>
			<ol start="7">
			<li><strong>Gew&auml;hrleistung</strong></li>
			</ol>
			<p>&nbsp;</p>
			<p>7.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Die Auftragnehmerin ist ohne R&uuml;cksicht auf ein Verschulden berechtigt und verpflichtet, bekanntwerdende Unrichtigkeiten und M&auml;ngel im Rahmen der gesetzlichen Gew&auml;hrleistung an ihrer Leistung zu beheben. Sie wird den/die Auftraggeber:in hievon unverz&uuml;glich in Kenntnis setzen.</p>
			<p>&nbsp;</p>
			<p>7.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dieser Anspruch des/der Auftraggebers:in erlischt nach sechs Monaten nach Erbringen der jeweiligen Leistung.</p>
			<p>&nbsp;</p>
			<ol start="8">
			<li><strong>Haftung / Schadenersatz</strong></li>
			</ol>
			<p>&nbsp;</p>
			<p>8.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Die Auftragnehmerin haftet dem/der Auftraggeber:in f&uuml;r Sch&auml;den &ndash; ausgenommen f&uuml;r Personensch&auml;den - nur im Falle groben Verschuldens (Vorsatz oder grobe Fahrl&auml;ssigkeit). Dies gilt sinngem&auml;&szlig; auch f&uuml;r Sch&auml;den, die auf von der Auftragnehmerin beigezogene Dritte zur&uuml;ckgehen.</p>
			<p>&nbsp;</p>
			<p>8.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Schadenersatzanspr&uuml;che des/der Aufraggebers:in k&ouml;nnen nur innerhalb von sechs Monaten ab Kenntnis von Schaden und Sch&auml;diger, sp&auml;testens aber innerhalb von drei Jahren nach dem anspruchsbegr&uuml;ndenden Ereignis gerichtlich geltend gemacht werden.</p>
			<p>&nbsp;</p>
			<p>8.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Der/die Auftraggeber:in hat jeweils den Beweis zu erbringen, dass der Schaden auf ein Verschulden der Auftragnehmerin zur&uuml;ckzuf&uuml;hren ist.</p>
			<p>&nbsp;</p>
			<p>8.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sofern der/die Auftragnehmerin das Werk unter Zuhilfenahme Dritter erbringt und in diesem Zusammenhang Gew&auml;hrleistungs- und/oder Haftungsanspr&uuml;che gegen&uuml;ber diesen Dritten entstehen, tritt die Auftragnehmerin diese Anspr&uuml;che an den/die Auftraggeber:in ab. Der/die Auftraggeber:in wird sich in diesem Fall vorrangig an diese Dritten halten.</p>
			<p>&nbsp;</p>
			<ol start="9">
			<li><strong> Geheimhaltung / Datenschutz</strong></li>
			</ol>
			<p>&nbsp;</p>
			<p>9.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Die Auftragnehmerin verpflichtet sich zu unbedingtem Stillschweigen &uuml;ber alle ihr &nbsp;zur Kenntnis gelangenden gesch&auml;ftlichen Angelegenheiten, insbesondere Gesch&auml;fts- und Betriebsgeheimnisse sowie jedwede Information, die sie &uuml;ber Art, Betriebsumfang und praktische T&auml;tigkeit des/der Auftraggebers:in erh&auml;lt.</p>
			<p>&nbsp;</p>
			<p>9.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Weiters verpflichtet sich die Auftragnehmerin, &uuml;ber den gesamten Inhalt des Werkes sowie s&auml;mtliche Informationen und Umst&auml;nde, die ihr im Zusammenhang mit der Erstellung des Werkes zugegangen sind, insbesondere auch &uuml;ber die Daten von Klient:innen des/der Auftraggebers:in, Dritten gegen&uuml;ber Stillschweigen zu bewahren.</p>
			<p>&nbsp;</p>
			<p>9.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Die Auftragnehmerin ist von der Schweigepflicht gegen&uuml;ber allf&auml;lligen Gehilfen und Stellvertreter:innen, denen sie sich bedient, entbunden. Sie hat die Schweigepflicht aber auf diese vollst&auml;ndig zu &uuml;berbinden und haftet f&uuml;r deren Versto&szlig; gegen die Verschwiegenheitsverpflichtung wie f&uuml;r einen eigenen Versto&szlig;.</p>
			<p>&nbsp;</p>
			<p>9.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Die Schweigepflicht reicht unbegrenzt auch &uuml;ber das Ende dieses Vertragsverh&auml;ltnisses hinaus. Ausnahmen bestehen im Falle gesetzlich vorgesehener Aussageverpflichtungen.</p>
			<p>&nbsp;</p>
			<p>9.5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Die Auftragnehmerin ist berechtigt, ihr anvertraute personenbezogene Daten im Rahmen der Zweckbestimmung des Vertragsverh&auml;ltnisses zu verarbeiten. Der/die Auftraggeber:in leistet der Auftragnehmerin Gew&auml;hr, dass hief&uuml;r s&auml;mtliche erforderlichen Ma&szlig;nahmen insbesondere jene im Sinne des Datenschutzgesetzes, wie etwa Zustimmungserkl&auml;rungen der Betroffenen, getroffen worden sind.</p>
			<p>&nbsp;</p>
			<p><strong><br /> </strong></p>
			<ol start="10">
			<li><strong>Honorar</strong></li>
			</ol>
			<p>&nbsp;</p>
			<p>10.1&nbsp;&nbsp;&nbsp;&nbsp; Nach Vollendung des vereinbarten Werkes erh&auml;lt die Auftragnehmerin ein Honorar gem&auml;&szlig; der Vereinbarung zwischen dem/der Auftraggeber:in und der Auftragnehmerin. Die &nbsp;Auftragnehmerin ist berechtigt, dem Arbeitsfortschritt entsprechend Zwischenabrechnungen zu legen und dem jeweiligen Fortschritt entsprechende Akonti zu verlangen. Das Honorar ist jeweils mit Rechnungslegung durch den/die Auftragnehmerin f&auml;llig.</p>
			<p>&nbsp;</p>
			<p>10.2&nbsp;&nbsp;&nbsp;&nbsp; Die Auftragnehmerin wird jeweils eine zum Vorsteuerabzug berechtigende Rechnung mit allen gesetzlich erforderlichen Merkmalen ausstellen.</p>
			<p>&nbsp;</p>
			<p>10.3&nbsp;&nbsp;&nbsp;&nbsp; Anfallende Barauslagen, Spesen, Reisekosten, etc. sind gegen Rechnungslegung der &nbsp;Auftragnehmerin vom/von der Auftraggeber:in zus&auml;tzlich zu ersetzen.</p>
			<p>&nbsp;</p>
			<p>10.4&nbsp;&nbsp;&nbsp;&nbsp; Unterbleibt die Ausf&uuml;hrung des vereinbarten Werkes aus Gr&uuml;nden, die auf Seiten des/der Auftraggebers:in liegen, oder aufgrund einer berechtigten vorzeitigen Beendigung des Vertragsverh&auml;ltnisses durch die Auftragnehmerin, so beh&auml;lt die Auftragnehmerin den Anspruch auf Zahlung des gesamten vereinbarten Honorars abz&uuml;glich ersparter Aufwendungen. Im Falle der Vereinbarung eines Stundenhonorars ist das Honorar f&uuml;r jene Stundenanzahl, die f&uuml;r das gesamte vereinbarte Werk zu erwarten gewesen ist, abz&uuml;glich der ersparten Aufwendungen zu leisten. Die ersparten Aufwendungen sind mit 30 Prozent des Honorars f&uuml;r jene Leistungen, die die Auftragnehmerin bis zum Tage der Beendigung des Vertragsverh&auml;ltnisses noch nicht erbracht hat, pauschaliert vereinbart.</p>
			<p>&nbsp;</p>
			<p>10.5&nbsp;&nbsp;&nbsp;&nbsp; Im Falle der Nichtzahlung von Zwischenabrechnungen ist die Auftragnehmerin von ihrer Verpflichtung, weitere Leistungen zu erbringen, befreit. Die Geltendmachung weiterer aus der Nichtzahlung resultierender Anspr&uuml;che wird dadurch aber nicht ber&uuml;hrt.</p>
			<p><strong>&nbsp;</strong></p>
			<ol start="11">
			<li><strong> Elektronische Rechnungslegung</strong></li>
			</ol>
			<p><strong>&nbsp;</strong></p>
			<p>11.1&nbsp;&nbsp;&nbsp;&nbsp; Die Auftragnehmerin ist berechtigt, dem/der Auftraggeber:in Rechnungen auch in elektronischer Form zu &uuml;bermitteln. Der/die Auftraggeber:in erkl&auml;rt sich mit der Zusendung von Rechnungen in elektronischer Form durch die Auftragnehmerin ausdr&uuml;cklich einverstanden.</p>
			<p><strong>&nbsp;</strong></p>
			<ol start="12">
			<li><strong> Dauer des Vertrages</strong></li>
			</ol>
			<p><strong>&nbsp;</strong></p>
			<p>12.1&nbsp;&nbsp;&nbsp;&nbsp; Dieser Vertrag endet grunds&auml;tzlich mit dem Abschluss des Projekts und der entsprechenden Rechnungslegung.</p>
			<p>&nbsp;</p>
			<p>12.2&nbsp;&nbsp;&nbsp;&nbsp; Der Vertrag kann dessen ungeachtet jederzeit aus wichtigen Gr&uuml;nden von jeder Seite ohne Einhaltung einer K&uuml;ndigungsfrist gel&ouml;st werden. Als wichtiger Grund ist insbesondere anzusehen,</p>
			<p>&nbsp;</p>
			<ul>
			<li>Wenn eine Vertragspartei wesentliche Vertragsverpflichtungen verletzt, oder</li>
			<li>wenn eine Vertragspartei nach Er&ouml;ffnung eines Insolvenzverfahrens in Zahlungsverzug ger&auml;t, oder</li>
			<li>wenn berechtigte Bedenken hinsichtlich der Bonit&auml;t einer Vertragspartei, &uuml;ber die kein Insolvenzverfahren er&ouml;ffnet ist, bestehen und diese auf Begehren der Auftragnehmerin weder Vorauszahlungen leistet noch vor Leistung der Auftragnehmerin eine taugliche Sicherheit leistet und die schlechten Verm&ouml;gensverh&auml;ltnisse der anderen Vertragspartei bei Vertragsabschluss nicht bekannt waren.</li>
			</ul>
			<p>&nbsp;</p>
			<ol start="13">
			<li><strong> Schlussbestimmungen</strong></li>
			</ol>
			<p><strong>&nbsp;</strong></p>
			<p>13.1&nbsp;&nbsp;&nbsp;&nbsp; Die Vertragsparteien best&auml;tigen, alle Angaben im Vertrag gewissenhaft und wahrheitsgetreu gemacht zu haben und verpflichten sich, allf&auml;llige &Auml;nderungen wechselseitig umgehend bekannt zu geben.</p>
			<p>&nbsp;</p>
			<p>13.2&nbsp;&nbsp;&nbsp;&nbsp; &Auml;nderungen des Vertrages und dieser AGB bed&uuml;rfen der Schriftform; ebenso ein Abgehen von dieser Formerfordernis. M&uuml;ndliche Nebenabreden bestehen nicht.</p>
			<p>&nbsp;</p>
			<p>13.3&nbsp;&nbsp;&nbsp;&nbsp; Auf diesen Vertrag ist materielles &ouml;sterreichisches Recht unter Ausschluss der Verweisungsnormen des internationalen Privatrechts sowie des UN-Kaufrechts anwendbar. Erf&uuml;llungsort ist der Ort der beruflichen Niederlassung der Auftragnehmerin. F&uuml;r Streitigkeiten ist das Gericht am Unternehmensort der Auftragnehmerin zust&auml;ndig.</p>
			<p>&nbsp;</p>
			<p><strong>&nbsp;</strong></p>
			<p><strong>Der Fachverband Unternehmensberatung, Buchhaltung und Informationstechnologie empfiehlt als wirtschaftsfreundliches Mittel der Streitschlichtung nachfolgende Mediationsklausel:</strong></p>
			<p><strong>&nbsp;</strong></p>
			<p>(1) F&uuml;r den Fall von Streitigkeiten aus diesem Vertrag, die nicht einvernehmlich geregelt werden k&ouml;nnen, vereinbaren die Vertragsparteien einvernehmlich zur au&szlig;ergerichtlichen Beilegung des Konfliktes eingetragene Mediator:innen (ZivMediatG) mit dem Schwerpunkt WirtschaftsMediation aus der Liste des Justizministeriums beizuziehen. Sollte &uuml;ber die Auswahl der WirtschaftsMediatoren:innen oder inhaltlich kein Einvernehmen hergestellt werden k&ouml;nnen, werden fr&uuml;hestens ein Monat ab Scheitern der Verhandlungen</p>
			<p>rechtliche Schritte eingeleitet.</p>
			<p>&nbsp;</p>
			<p>(2) Im Falle einer nicht zustande gekommenen oder abgebrochenen Mediation, gilt in einem allf&auml;llig eingeleiteten Gerichtsverfahren &ouml;sterreichisches Recht.</p>
			<p>S&auml;mtliche aufgrund einer vorherigen Mediation angelaufenen notwendigen Aufwendungen, insbesondere auch jene f&uuml;r beigezogene Rechtsberater:innen, k&ouml;nnen vereinbarungsgem&auml;&szlig; in einem Gerichts- oder Schiedsgerichtsverfahren als &bdquo;vorprozessuale Kosten&ldquo; geltend gemacht werden.</p>
			</div>
	)}
 {language !== 'de' && (<div>
	<ol>
<li><strong>General Terms and Conditions / Scope</strong></li>
</ol>
<p>&nbsp;</p>
<p>1.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All legal transactions between the Principal and the Agent (Management Consultant) - hereinafter referred to as Agent - shall be exclusively subject to these General Terms and Conditions. The version valid at the time the Contract is executed shall be applicable.</p>
<p>&nbsp;</p>
<p>1.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; These General Terms and Conditions shall also apply to any future contractual relationships even if these General Terms and Conditions are not expressly referred to in collateral contracts.</p>
<p>&nbsp;</p>
<p>1.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Any conflicting General Terms and Conditions on the part of the Principal shall be invalid unless they have been explicitly accepted in writing by the Agent.</p>
<p>&nbsp;</p>
<p>1.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If any provision of these General Terms and Conditions is or becomes invalid, the other provisions and any contracts executed pursuant to these provisions shall not be affected thereby. The invalid provision shall be replaced by a provision which best corresponds to the intention and economic purpose of the invalid provision.</p>
<p>&nbsp;</p>
<ol start="2">
<li><strong>Scope of consulting assignments / representation</strong></li>
</ol>
<p>&nbsp;</p>
<p>2.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The scope of each particular consulting assignment shall be individually agreed by contract.</p>
<p>&nbsp;</p>
<p>2.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Agent shall be entitled to subcontract, in whole or in part, the services for which the Agent is responsible to third parties. Payment of said third parties shall be effected exclusively by the Agent. No contractual relationship of any kind shall exist between the Principal and said third party.</p>
<p>&nbsp;</p>
<p>2.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; During the validity of this Contract and for a period of three years after termination thereof, the Principal shall agree not to enter into any kind of business transactions with persons or organisations the Agent employs to perform the Agent&rsquo;s contractual duties. In particular, the Principal shall not employ said persons or organisations to render consulting services the same or similar to those offered by the Agent.</p>
<p>&nbsp;</p>
<ol start="3">
<li><strong>Principal&rsquo;s obligation to provide information / declaration of completeness</strong></li>
</ol>
<p>&nbsp;</p>
<p>3.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Principal shall ensure that during the performance of the consulting assignment, organisational conditions in the Principal&rsquo;s place of business allow the consulting process to proceed in a timely and undisturbed manner.</p>
<p>&nbsp;</p>
<p>3.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Principal shall also inform the Agent in detail about previously conducted and/or currently active consulting projects, including those in other areas of competency.</p>
<p>&nbsp;</p>
<p>3.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Principal shall, in a timely manner and without special request on the part of the Agent, provide the Agent with all documents necessary to fulfil and perform the consulting assignment and shall inform the Agent of all activities and conditions pertinent to the performance of the consulting assignment. This includes all documents, activities and conditions that become known or available during the performance of the consulting assignment.</p>
<p>&nbsp;</p>
<p>3.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Principal shall ensure that all employees as well as any employee representation (works council) provided by law, if established, are informed of the Agent&rsquo;s consulting activities prior to the commencement of the assignment.</p>
<p>&nbsp;</p>
<ol start="4">
<li><strong>Maintenance of independence</strong></li>
</ol>
<p>&nbsp;</p>
<p>4.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Contracting Parties shall be committed to mutual loyalty.</p>
<p>&nbsp;</p>
<p>4.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Contracting Parties shall be obligated to take all necessary measures to ensure that the independence of all persons working for the Agent and/or of any third parties employed by the Agent is not jeopardized. This applies particularly to any employment offers made by the Principal or the acceptance of assignments on their own account.</p>
<p>&nbsp;</p>
<ol start="5">
<li><strong>Reporting / obligation to report</strong></li>
</ol>
<p>&nbsp;</p>
<p>5.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Agent shall be obligated to report to the Principal on the progress of services performed by persons working for the Agent and/or any third parties employed by the Agent.</p>
<p>&nbsp;</p>
<p>5.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Agent shall deliver the final report in a timely manner, i.e. depending on the type of assignment, two to four weeks after completion of the assignment.</p>
<p>&nbsp;</p>
<p>5.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Agent shall not be bound by directives while performing the agreed service and shall be free to act at the Agent&rsquo;s discretion and under the Agent&rsquo;s own responsibility. The Agent shall not be required to work in a particular place or to keep particular working hours.</p>
<p>&nbsp;</p>
<ol start="6">
<li><strong>Protection of intellectual property</strong></li>
</ol>
<p>&nbsp;</p>
<p>6.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Agent shall retain all copyrights to any work done by the Agent and/or by persons working for the Agent and/or by third parties employed by the Agent (including but not limited to tenders, reports, analyses, expert opinions, organization charts, programmes, performance descriptions, drafts, calculations, drawings, data media, etc.). During the contract period and after termination thereof, the Principal may use these materials exclusively for the purposes described under the Contract. Therefore, the Principal shall not be entitled to copy or distribute these materials without the explicit consent of the Agent. Under no circumstances, shall the Agent be liable to third parties, in particular for the accuracy of the material, in the event of unauthorised copying/distribution of the material.</p>
<p>&nbsp;</p>
<p>6.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In the event of any violation of these provisions by the Principal, the Agent shall be entitled to immediate termination of the contract relationship and to assert any other statutory claims, in particular claims for omission and/or damages.</p>
<p>&nbsp;</p>
<ol start="7">
<li><strong>Warranty</strong></li>
</ol>
<p>&nbsp;</p>
<p>7.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Agent shall be entitled and obligated, regardless of fault, to correct any errors and/or inaccuracies in the Agent&rsquo;s work which have become known subsequently. The Agent will immediately inform the Principal thereof.</p>
<p>&nbsp;</p>
<p>7.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This right of the Principal expires six months after completion of the respective service.</p>
<p>&nbsp;</p>
<ol start="8">
<li><strong>Liability / damages</strong></li>
</ol>
<p>&nbsp;</p>
<p>8.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; With the exception of personal injuries, the Agent shall be liable to the Principal for damages only to the extent that these are the result of serious fault (intention or gross negligence). Correspondingly, this also applies to damages resulting from third parties employed by the Agent.</p>
<p>&nbsp;</p>
<p>8.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Any claim for damages on the part of the Principal may only be enforced by law within six months after they have gained knowledge of the damage and the liable party, but no later than three years after the incident upon which the claim is based.</p>
<p>&nbsp;</p>
<p>8.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Principal shall furnish evidence of the Agent&rsquo;s fault.</p>
<p>&nbsp;</p>
<p>8.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If the Agent performs the required services with the help of third parties, any warranty claims and claims for damages which arise against the third party shall be passed on to the Principal. In this case, the Principal shall primarily refer to the third party.</p>
<p>&nbsp;</p>
<ol start="9">
<li><strong> Confidentiality / data protection</strong></li>
</ol>
<p>&nbsp;</p>
<p>9.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Agent shall be obligated to maintain complete confidentiality concerning all business matters made known to the Agent in the course of services performed, especially trade and company secrets and any other information concerning type and/or scope of business and/or practical activities of the Principal.</p>
<p>&nbsp;</p>
<p>9.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Furthermore, the Agent shall be obligated to maintain complete confidentiality towards third parties concerning the content of the work completed, as well as any information and conditions that contributed to the completion of the work, particularly concerning data on the Principal&rsquo;s clients.</p>
<p>&nbsp;</p>
<p>9.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Agent shall not be obligated to maintain confidentiality towards any person working for the Agent or representatives of the Agent. However, the Agent is required to obligate such persons to maintain complete confidentiality and shall be liable for any violation of confidentiality on their part in the same way as if the Agent had breached confidentiality.</p>
<p>&nbsp;</p>
<p>9.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The obligation to maintain confidentiality shall persist indefinitely even after termination of this Contract. This shall not apply in case the Agent is legally required to disclose information.</p>
<p>&nbsp;</p>
<p>9.5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Agent shall be entitled to use any personal data entrusted to the Agent for the purposes of the services performed. The Agent shall guarantee the Principal that all necessary measures will be taken, especially those regarding the Austrian Data Protection Act (DSG), e.g. that declarations of consent are obtained from the persons involved.</p>
<p>&nbsp;</p>
<ol start="10">
<li><strong>Remuneration</strong></li>
</ol>
<p>&nbsp;</p>
<p>10.1&nbsp;&nbsp;&nbsp;&nbsp; After completion of the services agreed upon, the Agent shall receive remuneration agreed upon in advance between the Agent and the Principal. The Agent shall be entitled to render intermediate accounts and to demand payment on account as required by the progress of the work. Remuneration shall be due and payable immediately after rendering accounts by the Agent.</p>
<p>&nbsp;</p>
<p>10.2&nbsp;&nbsp;&nbsp;&nbsp; The Agent shall render accounts which entitle to deduct input tax and contain all elements required by law.</p>
<p>&nbsp;</p>
<p>10.3&nbsp;&nbsp;&nbsp;&nbsp; Any cash expenditures, expenses, travel expenses, etc. shall be reimbursed to the Agent by the Principal separately, upon submission of the appropriate receipts.</p>
<p>&nbsp;</p>
<p>10.4&nbsp;&nbsp;&nbsp;&nbsp; In the event that the work agreed upon is not completed due to reasons on the part of the Principal, or due to a premature termination of contract by the Agent for cause, the Agent shall be entitled to claim payment in full of the remuneration agreed upon in advance, less expenses not incurred. In the event that an hourly fee had been agreed upon, the Principal shall pay for the number of hours expected to be required for the entire contracted assignment, less expenses not incurred. Expenses not incurred shall be calculated as a lump sum consisting of 30% of the fee required for those services that the Agent did not perform by the date of termination of the agreement.</p>
<p>&nbsp;</p>
<p>10.5&nbsp;&nbsp;&nbsp;&nbsp; In the event that intermediate invoices are not paid, the Agent shall be released from the Agent&rsquo;s commitment to provide further services. This shall be without prejudice to any further claims resulting from default of payment.</p>
<p><strong>&nbsp;</strong></p>
<ol start="11">
<li><strong> Electronic invoicing</strong></li>
</ol>
<p><strong>&nbsp;</strong></p>
<p>11.1&nbsp;&nbsp;&nbsp;&nbsp; The Agent shall be entitled to transmit invoices electronically. The Principal explicitly agrees to accept invoices transmitted electronically by the Agent.</p>
<p><strong>&nbsp;</strong></p>
<ol start="12">
<li><strong> Duration of the contract</strong></li>
</ol>
<p><strong>&nbsp;</strong></p>
<p>12.1&nbsp;&nbsp;&nbsp;&nbsp; This Contract shall terminate upon the completion of the project and the corresponding invoice.</p>
<p>&nbsp;</p>
<p>12.2&nbsp;&nbsp;&nbsp;&nbsp; Apart from this, this Contract may be terminated for good cause by either Party at any time without notice. Grounds for premature termination include the following:</p>
<p>&nbsp;</p>
<ul>
<li>A Party breaches major provisions of the Contract; or</li>
<li>A Party is in default of payment after insolvency proceedings have been opened; or</li>
<li>A Party has substantiated concerns regarding the other Party&rsquo;s creditworthiness, without any insolvency proceedings, and such other Party does not make any advance payments upon request of the Agent/provide any suitable guarantee in advance upon request of the Principal, and such negative financial circumstances have not been known to the other Party at the time of execution of the contract.</li>
</ul>
<p><strong>&nbsp;</strong></p>
<ol start="13">
<li><strong> Final provisions</strong></li>
</ol>
<p><strong>&nbsp;</strong></p>
<p>13.1&nbsp;&nbsp;&nbsp;&nbsp; The contracting parties declare that all information contained herein is accurate and made in good conscience; and they shall be mutually obligated to immediately inform the other party of any changes.</p>
<p>&nbsp;</p>
<p>13.2&nbsp;&nbsp;&nbsp;&nbsp; Modifications of and amendments to this Contract or these General Terms and Conditions shall be made in writing; this shall also apply to a waiver of this requirement. Subsidiary agreements have not been executed.</p>
<p>&nbsp;</p>
<p>13.3&nbsp;&nbsp;&nbsp;&nbsp; This Contract is governed by the substantive law of the Republic of Austria, excluding the conflict-of-law rules of international private law and CISG. Place of fulfilment is the registered place of business of the Agent. The court at the Agent&rsquo;s registered place of business shall be competent in any disputes.</p>
<p>&nbsp;</p>
<p><strong>&nbsp;</strong></p>
<p><strong>The Austrian Professional Association of Management Consultancy, Accounting and Information Technology recommends the following mediation clause as a pro-business method of dispute resolution:</strong></p>
<p><strong>&nbsp;</strong></p>
<p>(1) In the event that any disputes, which cannot be solved by mutual agreement, arise from this Contract, the Parties to the contract agree to engage a listed mediator (Austrian Civil Rights Mediation Law (ZivMediatG)) specialized in business mediation from the list of the Austrian Ministry of Justice in order to reconcile these out of court. Should no mutual agreement regarding the selection of the business mediator or with regard to content be possible, legal measures shall be initiated no sooner than one month after the negotiations fail.</p>
<p>&nbsp;</p>
<p>(2) In the event that mediation could not be held or was discontinued, any litigation initiated shall be subject to Austrian law.</p>
<p>As agreed, all necessary costs incurred due to previous mediation, particularly for legal advisors consulted, may be claimed in litigation or arbitration as "pre-trial costs".</p>
<p>&nbsp;</p>
 </div>)}
</div>
	
    <div  style={{ backgroundColor: '#c1b3a5' }} className="banner"></div>
  </div>

    
  );
};

export default AGB;