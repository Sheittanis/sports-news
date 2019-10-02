import React from 'react'
import { Header, Segment, Container } from 'semantic-ui-react'

const Article = (props) => {

    return (
        <Segment vertical>
            <Container>
                <Header as='h3'>Ανακοίνωση εξέδωσαν οι οργανωμένοι φίλοι του ΑΠΟΕΛ, σχετικά με την μεγάλη γιορτή των γαλαζοκιτρίνων που θα γίνει, στις 5 Οκτωμβρίου, στον Αρχάγγελο.</Header>
                <p>Επίσημος προσκεκλημένος θα είναι ο μεγάλος αρχηγός του ΑΠΟΕΛ, Νούνο Μοράις, όπου όπως αναφέρει η ανακοίνωση θα τιμηθεί δεόντως από τον σύνδεσμο του ΑΠΟΕΛ, για την πολύχρονη παρουσία του με τα χρώματα των πρωταθλητών.</p>
                <p>Αναλυτικά η ανακοίνωση:</p>
                <i>Στη μεγάλη γιορτή του ΑΠΟΕΛ μας, στον Αρχάγγελο το Σάββατο 5 Οκτωβρίου, θα μας δωθεί η ευκαιρία να τιμήσουμε όπως του αξίζει, τον μεγάλο εμβληματικό αρχηγό Νούνο Μοράις. Πρόκειται για τον ποδοσφαιριστή με τα περισσότερα λεπτά συμμετοχής στην ιστορία του ΘΡΥΛΟΥ και αναμφισβήτητα έναν από τους πολυτιμότερους αθλητές της ομάδας μας από το 1926 μέχρι σήμερα. Ο μεγάλος κόσμος του ΑΠΟΕΛ θα δείξει την ημέρα εκείνη την αγάπη που τρέφει για τον μεγάλο μας αρχηγό.</i>
            </Container>
        </Segment>
    )
}

export default Article