(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1542:function(e,r,a){e.exports=function(){"use strict";return[{locale:"de",pluralRuleFunction:function(e,r){var a=!String(e).split(".")[1];return r?"other":1==e&&a?"one":"other"},fields:{year:{displayName:"Jahr",relative:{0:"dieses Jahr",1:"nächstes Jahr","-1":"letztes Jahr"},relativeTime:{future:{one:"in {0} Jahr",other:"in {0} Jahren"},past:{one:"vor {0} Jahr",other:"vor {0} Jahren"}}},"year-short":{displayName:"Jahr",relative:{0:"dieses Jahr",1:"nächstes Jahr","-1":"letztes Jahr"},relativeTime:{future:{one:"in {0} Jahr",other:"in {0} Jahren"},past:{one:"vor {0} Jahr",other:"vor {0} Jahren"}}},month:{displayName:"Monat",relative:{0:"diesen Monat",1:"nächsten Monat","-1":"letzten Monat"},relativeTime:{future:{one:"in {0} Monat",other:"in {0} Monaten"},past:{one:"vor {0} Monat",other:"vor {0} Monaten"}}},"month-short":{displayName:"Monat",relative:{0:"diesen Monat",1:"nächsten Monat","-1":"letzten Monat"},relativeTime:{future:{one:"in {0} Monat",other:"in {0} Monaten"},past:{one:"vor {0} Monat",other:"vor {0} Monaten"}}},day:{displayName:"Tag",relative:{0:"heute",1:"morgen",2:"übermorgen","-2":"vorgestern","-1":"gestern"},relativeTime:{future:{one:"in {0} Tag",other:"in {0} Tagen"},past:{one:"vor {0} Tag",other:"vor {0} Tagen"}}},"day-short":{displayName:"Tag",relative:{0:"heute",1:"morgen",2:"übermorgen","-2":"vorgestern","-1":"gestern"},relativeTime:{future:{one:"in {0} Tag",other:"in {0} Tagen"},past:{one:"vor {0} Tag",other:"vor {0} Tagen"}}},hour:{displayName:"Stunde",relative:{0:"in dieser Stunde"},relativeTime:{future:{one:"in {0} Stunde",other:"in {0} Stunden"},past:{one:"vor {0} Stunde",other:"vor {0} Stunden"}}},"hour-short":{displayName:"Std.",relative:{0:"in dieser Stunde"},relativeTime:{future:{one:"in {0} Std.",other:"in {0} Std."},past:{one:"vor {0} Std.",other:"vor {0} Std."}}},minute:{displayName:"Minute",relative:{0:"in dieser Minute"},relativeTime:{future:{one:"in {0} Minute",other:"in {0} Minuten"},past:{one:"vor {0} Minute",other:"vor {0} Minuten"}}},"minute-short":{displayName:"Min.",relative:{0:"in dieser Minute"},relativeTime:{future:{one:"in {0} Min.",other:"in {0} Min."},past:{one:"vor {0} Min.",other:"vor {0} Min."}}},second:{displayName:"Sekunde",relative:{0:"jetzt"},relativeTime:{future:{one:"in {0} Sekunde",other:"in {0} Sekunden"},past:{one:"vor {0} Sekunde",other:"vor {0} Sekunden"}}},"second-short":{displayName:"Sek.",relative:{0:"jetzt"},relativeTime:{future:{one:"in {0} Sek.",other:"in {0} Sek."},past:{one:"vor {0} Sek.",other:"vor {0} Sek."}}}}},{locale:"de-AT",parentLocale:"de"},{locale:"de-BE",parentLocale:"de"},{locale:"de-CH",parentLocale:"de"},{locale:"de-IT",parentLocale:"de"},{locale:"de-LI",parentLocale:"de"},{locale:"de-LU",parentLocale:"de"}]}()},957:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.messages=r.locale=r.areTranslationsLoaded=void 0;var t,i=a(8),n=a(1542),o=(t=n)&&t.__esModule?t:{default:t};(0,i.addLocaleData)(o.default);r.areTranslationsLoaded=!0,r.locale="de",r.messages={"Terra.AbstractModal.BeginModalDialog":"Modaldialog starten","Terra.AbstractModal.EndModalDialog":"Beenden Sie den modalen Dialog","Terra.actionHeader.back":"Zurück","Terra.actionHeader.close":"Schließen","Terra.actionHeader.maximize":"Maximieren","Terra.actionHeader.minimize":"Minimieren","Terra.actionHeader.next":"Nächste","Terra.actionHeader.previous":"Vorherige","Terra.ajax.error":"Inhalt konnte nicht geladen werden.","Terra.alert.advisory":"Hinweis.","Terra.alert.alert":"Warnung.","Terra.alert.dismiss":"Verwerfen","Terra.alert.error":"Fehler.","Terra.alert.info":"Informationen.","Terra.alert.success":"Erfolg.","Terra.alert.unsatisfied":"Erforderliche Aktion.","Terra.alert.unverified":"Externe Datensätze","Terra.alert.warning":"Achtung.","Terra.applicationNavigation.drawerMenu.navigation":"Navigationselemente","Terra.applicationNavigation.drawerMenu.utilities":"Dienstprogrammelemente","Terra.applicationNavigation.extensions.rollupButtonDescription":"Additional Tools","Terra.applicationNavigation.extensions.rollupMenuHeaderTitle":"Additional Tools","Terra.applicationNavigation.header.menuButtonTitle":"Menü","Terra.applicationNavigation.header.skipToContentTitle":"Zum Inhalt","Terra.applicationNavigation.header.utilityButtonTitleNoUser":"Optionen","Terra.applicationNavigation.header.utilityButtonTitleUser":"Benutzereinstellungen","Terra.applicationNavigation.notifications.new":"Neu","Terra.applicationNavigation.tabs.rollupButtonDescription":"Mehr Navigation","Terra.applicationNavigation.tabs.rollupButtonTitle":"Mehr","Terra.applicationNavigation.tabs.rollupMenuHeaderTitle":"Mehr Navigation","Terra.applicationNavigation.utilityMenu.headerTitle":"Dienstprogramme","Terra.applicationNavigation.utilityMenu.help":"Hilfe","Terra.applicationNavigation.utilityMenu.logout":"Abmelden","Terra.applicationNavigation.utilityMenu.settings":"Einstellungen","Terra.clinicalResult.additionalResults":"{numberOfAdditionalResults} weitere Ergebnisse","Terra.clinicalResult.includesAdditionalValuesAria":"Ergebnis enthält weitere Werte","Terra.clinicalResult.interpretationAbnormal":"Abnorm","Terra.clinicalResult.interpretationCritical":"Kritisch","Terra.clinicalResult.interpretationCriticalAbnormal":" Kritisch abnorm ","Terra.clinicalResult.interpretationCriticalHigh":"Kritischer Maximalwert","Terra.clinicalResult.interpretationCriticalLow":"Kritischer Minimalwert","Terra.clinicalResult.interpretationHigh":"Hoch","Terra.clinicalResult.interpretationLow":"Niedrig","Terra.clinicalResult.interpretationPositive":"Positiv","Terra.clinicalResult.resultComment":"Ergebnis enthält einen Kommentar","Terra.clinicalResult.resultError":"Fehler","Terra.clinicalResult.resultModified":"Geändertes Ergebnis","Terra.clinicalResult.resultNoData":"Keine Ergebnisse","Terra.clinicalResult.resultUnverified":"Nicht verifiziertes Ergebnis","Terra.clinicalResult.selectToViewAria":"Zum Anzeigen weiterer Details auswählen","Terra.clinicalResult.statusInError":"Ungültig","Terra.clinicalResult.statusInErrorAria":"Wert für ungültig erklärt ","Terra.clinicalResult.viewResults":"Ergebnisse anzeigen","Terra.collapsibleMenuView.more":"Mehr","Terra.data-grid.navigate":"Zu Datenraster navigieren","Terra.data-grid.row-selection-template":"Wählen: {rowDescription}","Terra.date.input.april":"April","Terra.date.input.august":"August","Terra.date.input.dateFormatLabel":"Datumsformat:","Terra.date.input.dayFormatLabel":"TT","Terra.date.input.dayLabel":"Datum","Terra.date.input.december":"Dezember","Terra.date.input.february":"Februar","Terra.date.input.january":"Januar","Terra.date.input.july":"Juli","Terra.date.input.june":"Juni","Terra.date.input.legend":"Datum","Terra.date.input.march":"März","Terra.date.input.may":"Mai","Terra.date.input.monthLabel":"Monat","Terra.date.input.monthPlaceholder":"- Auswählen -","Terra.date.input.november":"November","Terra.date.input.october":"Oktober","Terra.date.input.optional":"(Optional)","Terra.date.input.required":"Pflichtfeld","Terra.date.input.september":"September","Terra.date.input.yearFormatLabel":"JJJJ","Terra.date.input.yearLabel":"Jahr","Terra.datePicker.calendarInstructions":"Verwenden Sie die Pfeiltasten, um die Auswahl zu ändern. Drücken Sie die Eingabetaste, um ein Datum zu wählen. Drücken Sie die Esc-Taste, um die Datumsauswahl zu schließen.","Terra.datePicker.closeCalendar":"Schließen","Terra.datePicker.date":"Datum","Terra.datePicker.dateFormat":"TT.MM.JJJJ","Terra.datePicker.dateFormatLabel":"Datumsformat:","Terra.datePicker.disabled":"Deaktiviert","Terra.datePicker.monthLabel":"Monat","Terra.datePicker.nextMonth":"Nächster Monat","Terra.datePicker.openCalendar":"Kalender öffnen","Terra.datePicker.previousMonth":"Letzter Monat","Terra.datePicker.today":"Heute","Terra.datePicker.yearLabel":"Jahr","Terra.dateTimePicker.timeClarification.button.daylightSaving":"Vor (Sommerzeit)","Terra.dateTimePicker.timeClarification.button.standardTime":"Nach (Standardzeit)","Terra.dateTimePicker.timeClarification.message":"Die ausgewählte Zeit liegt während der Umstellung von Sommer- auf Standardzeit. Möchten Sie für die Zeit vor oder nach der Zeitumstellung dokumentieren?","Terra.dateTimePicker.timeClarification.title":"Klärung der Zeit","Terra.demographicsBanner.dateOfBirth":"Geburtsdatum","Terra.demographicsBanner.dateOfBirthFullText":"Geburtsdatum","Terra.demographicsBanner.deceased":"Verstorben","Terra.demographicsBanner.gestationalAge":"GA","Terra.demographicsBanner.gestationalAgeFullText":"Gestationsalter","Terra.demographicsBanner.noDataProvided":"--","Terra.demographicsBanner.postMenstrualAge":"Postmenstruelles Alter","Terra.demographicsBanner.postMenstrualAgeFullText":"Postmenstruelles Alter","Terra.devSite.themed.help":"Hilfe","Terra.dialog.close":"Schließen","Terra.dropdownButton.moreOptions":"Weitere Optionen","Terra.form.field.optional":"(Optional)","Terra.form.field.required":"Pflichtfeld","Terra.form.select.add":'"{text}" hinzufügen',"Terra.form.select.ariaLabel":"Suchen","Terra.form.select.clearSelect":"Ausgewählte entfernen","Terra.form.select.defaultDisplay":"- Auswählen -","Terra.form.select.defaultUsageGuidance":"Verwenden Sie die Pfeiltasten, um durch die Optionen zu navigieren. Drücken Sie die Eingabetaste, um eine Option auszuwählen.","Terra.form.select.dimmed":"Gedimmt","Terra.form.select.disabled":"Deaktiviert","Terra.form.select.listOfTotalOptions":"Liste von {total} Optionen","Terra.form.select.maxSelectionHelp":"{text} Elemente begrenzen.","Terra.form.select.maxSelectionOption":"Maximale Anzahl an ausgewählten {text} Elementen","Terra.form.select.menu":"Menü","Terra.form.select.mobileButtonUsageGuidance":"Klicken, um zu Optionen zu navigieren","Terra.form.select.mobileUsageGuidance":"Nach rechts wischen, um zu Optionen zu navigieren","Terra.form.select.multiSelectUsageGuidance":"Geben Sie Text ein oder verwenden Sie die Pfeiltasten, um durch die Optionen zu navigieren. Drücken Sie die Eingabetaste, um eine Option auszuwählen oder die Auswahl aufzuheben.","Terra.form.select.noResults":'Keine Übereinstimmungen für "{text}"',"Terra.form.select.optGroup":"Gruppe {text}","Terra.form.select.option":"Optionen","Terra.form.select.searchUsageGuidance":"Geben Sie Text ein oder verwenden Sie die Pfeiltasten, um durch die Optionen zu navigieren. Drücken Sie die Eingabetaste, um eine Option auszuwählen.","Terra.form.select.selectCleared":"Ausgewählter Wert wurde entfernt","Terra.form.select.selected":"Ausgewählt","Terra.form.select.selectedText":"Ausgewählt: {text}","Terra.form.select.unselected":"Nicht ausgewählt","Terra.form.select.unselectedText":"{text} nicht ausgewählt","Terra.icon.IconConsultInstructionsForUse.title":"Symbol 'Elektronische Gebrauchsanweisung'","Terra.InfiniteList.loading":"Ladevorgang...","Terra.menu.back":"Zurück","Terra.menu.close":"Schließen","Terra.notification.dialog.error":"Fehler","Terra.notification.dialog.hazard-high":"Benachrichtigung","Terra.notification.dialog.hazard-low":"Informationen","Terra.notification.dialog.hazard-medium":"Warnung","Terra.onsetPicker.age":"Alter","Terra.onsetPicker.ageLabel":"Geben Sie ein Alter an","Terra.onsetPicker.agePrecision":"Alter","Terra.onsetPicker.agePrecisionLabel":"Wählen Sie eine Altersgenauigkeit","Terra.onsetPicker.agePrecisionMonth":"Monat(e)","Terra.onsetPicker.agePrecisionWeek":"Woche(n)","Terra.onsetPicker.agePrecisionYear":"Jahr(e)","Terra.onsetPicker.april":"April","Terra.onsetPicker.august":"August","Terra.onsetPicker.date":"Datum","Terra.onsetPicker.dateLabel":"Wählen Sie ein Datum","Terra.onsetPicker.december":"Dezember","Terra.onsetPicker.february":"Februar","Terra.onsetPicker.granularity":"Granularität","Terra.onsetPicker.granularityLabel":"Wählen Sie eine Datengranularität","Terra.onsetPicker.january":"Januar","Terra.onsetPicker.july":"Juli","Terra.onsetPicker.june":"Juni","Terra.onsetPicker.march":"März","Terra.onsetPicker.may":"Mai","Terra.onsetPicker.month":"Monat","Terra.onsetPicker.monthLabel":"Wählen Sie einen Monat","Terra.onsetPicker.november":"November","Terra.onsetPicker.october":"Oktober","Terra.onsetPicker.precision":"Genauigkeit","Terra.onsetPicker.precisionAbout":"Ungefähr","Terra.onsetPicker.precisionAfter":"Nach","Terra.onsetPicker.precisionBefore":"Vor","Terra.onsetPicker.precisionLabel":"Wählen Sie eine Datumsgenauigkeit","Terra.onsetPicker.precisionOnAt":"Am/Um","Terra.onsetPicker.precisionUnknown":"Unbekannt","Terra.onsetPicker.september":"September","Terra.onsetPicker.year":"Jahr","Terra.onsetPicker.yearLabel":"Wählen Sie ein Jahr","Terra.Overlay.loading":"Ladevorgang...","Terra.paginator.first":"Erste","Terra.paginator.last":"Letzte","Terra.paginator.next":"Nächste","Terra.paginator.pageCount":"Seite {pageNumber} von {pageNumberTotal}","Terra.paginator.pageIndex":"Seite {pageNumber}","Terra.paginator.previous":"Zurück","Terra.popup.header.close":"Schließen","Terra.searchField.clear":"Entfernen","Terra.searchField.search":"Suchen","Terra.searchField.submit-search":"Suche eingeben","Terra.showhide.hide":"Ausblenden","Terra.showhide.showmore":"Mehr anzeigen","Terra.status-view.error":"Fehler","Terra.status-view.no-data":"Keine Ergebnisse","Terra.status-view.no-matching-results":"Keine Übereinstimmungen","Terra.status-view.not-authorized":"Nicht autorisiert","Terra.switch.switchstatuslabel.off":"Aus","Terra.switch.switchstatuslabel.on":"Ein","Terra.tabs.more":"Mehr","Terra.timeInput.am":"","Terra.timeInput.hh":"hh","Terra.timeInput.hours":"Stunden","Terra.timeInput.minutes":"Minuten","Terra.timeInput.mm":"mm","Terra.timeInput.pm":"","Terra.timeInput.seconds":"Sekunden","Terra.timeInput.ss":"Sek.","Terra.timeInput.timeFormatLabel":"Zeitformat:","terraApplication.actionMenu.headerCloseButtonLabel":"Schließen","terraApplication.errorBoundary.defaultErrorMessage":"Fehler: {errorDetails}","terraApplication.notificationBanner.advisory":"Hinweis.","terraApplication.notificationBanner.alert":"Warnung.","terraApplication.notificationBanner.dismiss":"Verwerfen","terraApplication.notificationBanner.error":"Fehler.","terraApplication.notificationBanner.info":"Informationen.","terraApplication.notificationBanner.success":"Erfolg.","terraApplication.notificationBanner.unsatisfied":"Erforderliche Aktion.","terraApplication.notificationBanner.unverified":"Externe Datensätze.","terraApplication.notificationBanner.warning":"Warnung.","terraApplication.notifications.newNotificationLabel":"{label}-Benachrichtigung neu. {bannerType} {bannerDescription}, {bannerAction}, {bannerDismiss}.","terraApplication.notifications.regionLabel":"{label}-Benachrichtigungen.","terraApplication.notifications.removedNotificationLabel":"{label}-Benachrichtigung entfernt. {bannerType} {bannerDescription}.","terraApplication.notifications.totalCountLabel":"{label}-Benachrichtigungen gesamt: {count}","terraApplication.statusLayout.error":"Fehler","terraApplication.statusLayout.no-data":"Keine Ergebnisse","terraApplication.statusLayout.no-matching-results":"Keine Übereinstimmungen","terraApplication.statusLayout.not-authorized":"Nicht autorisiert","terraApplication.unsavedChangesPrompt.acceptButtonText":"Nicht speichern","terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro":"Die Änderungen der folgenden Elemente wurden nicht gespeichert:","terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro":"Wenn Sie Ihre Änderungen nicht speichern, gehen diese verloren. Wie möchten Sie fortfahren?","terraApplication.unsavedChangesPrompt.rejectButtonText":"Mit der Bearbeitung fortfahren","terraApplication.unsavedChangesPrompt.singlePromptMessage":"Die Änderungen der folgenden Elemente wurden nicht gespeichert: {promptDescription}.","terraApplication.unsavedChangesPrompt.title":"Nicht gespeicherte Änderungen","terraApplication.workspace.activityOverlay.loading":"Ladevorgang...","terraApplication.workspace.hideWorkspaceLabel":"Arbeitsplatz ausblenden","terraApplication.workspace.showWorkspaceLabel":"Arbeitsplatz anzeigen","terraApplication.workspace.workspaceLabel":"Arbeitsplatz","terraApplication.workspace.workspaceSettingsLabel":"Einstellungen für Arbeitsplatz"}}}]);