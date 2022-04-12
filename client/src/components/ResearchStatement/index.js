import './style.css';
import './modal.css';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ResearchStatementModal () {
    const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    return (

        <>
		<Button variant="primary" onClick={handleShow}>
		  Research Statement
		</Button>

		<Modal
			show={show}
			onHide={handleClose}
			dialogClassName="modal-90w"
		>
		  <Modal.Header closeButton>
			<Modal.Title>Research Statement</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>
            <div className='research-statement'>
                {/* <h1>Research Statement</h1> */}
                <p>My worldview as a White, queer (using pronouns she/her/hers), artist/researcher/teacher is oriented toward critical anti-racist feminist (hooks, 2000; Leavy, 2015; Love, 2019; Tanesini, 1999) philosophies. My research examines an integrative view of art education as a feasible space of arts-based wellness, with equity and inclusion at the heart of these investigations. This work requires reimagining the role of art education/art educators in k-12 classrooms, museums, and community spaces to establish openings for trust, vulnerability, risk taking, selfcare and restoration. I engage in research that benefits equity and wellness of communities, advocates for inclusion of the arts and arts-based research, and invites critical reflection and transformation, embracing tenets of wellness and anti-racist feminist ideals. Though my research addresses diverse subject matter, it is anchored by the employment of integrative creative methods, connection of theory and practice, and celebration of aesthetic experience and artistic engagement.</p>
                <p>I utilize a heuristic approach of self-inquiry (Moustakas, 2001) to show the phenomenological process of intentional reflection and artistic reconstruction of internalized meanings of the experiences of my participants and myself. As I analyze, interpret, and describe phenomena respectfully and generously, critical self-reflection allows me to consider ways my mentality has been shaped by the dominant narratives I grew up around. For instance, this mentality, both conscious and subconscious, shaped my identity toward race. Tatum defined racial identity development as “the process of defining for oneself the personal significance and social meaning of belonging to a particular racial group” (1997, p. 16). These narratives shape our understanding of social meanings of race and impact how we interact with one another in a racialized context.
                Tatum suggested that cultural racism “like smog in the air” is constantly breathed in by all members of society (1997, p.6).
                </p>
                <p>With this image always in front of my eyes, I use creative methodological approaches (i.e., arts-based research, collage, expressive portraiture, painting) to aesthetically tell stories of the experiences of individuals struggling against dominant educational discourses. In my narrative study White saviorism: An insider perspective I explored the stories and pedagogical choices of a Black artist/art educator and their experience of White saviorism. Telling these stories, I not only raise awareness about the marginalization of others, of art teachers, the arts, and the visual in research, but I also emphasize systemic problems in art education. I argue that we must address a gap that exists (Love, 2019) in pre-service teacher/art teacher education by including studies in racism, intersectionality, and White privilege to create deeper understanding and reflection on how personal histories and bias affect pedagogical choices. My scholarship always advocates for the epistemological and methodological relevance of art in education and in research that benefits wellness in communities and encourages critical reflection and personal transformation.</p>
                <p>Seeking to design a curriculum that benefits wellness in all communities, I blended tenets of art education, community-based art education, and art therapy in my dissertation. I examined the nature and perceived effectiveness of the practice of a contemporary art therapist. I wanted to understand the extent to which such methods might be perceived by participants as transformative or therapeutic as well as holding implications for equitable wellness in education. I utilized arts-based (Barone, 2008; Irwin & de Cosson, 2004; O’Donohue, 2009) and arts-informed inquiry (Behar, 1996; Butler-Kisber, 2010; Clandinin & Connelly, 2000) methods to analyze, reconstruct, and represent findings but also to generate questions around the affective realm of art in education.</p>
                <p>Next, I developed and taught a series of workshops for educators/art educators that blended tenets of art education and art therapy. This transdisciplinary (Leavy, 2012; McGregor, 2004) research sought to bridge art education and art therapy providing art therapeutic strategies that are more accessible to students in need and more acceptable in the system of education. Andrus (2006) described a philosophy of therapeutic art education that enables teachers to access and facilitate therapeutic ends in artmaking, with students at the center. Accordingly, this study embraced a revised therapeutic view of arts education, that honored the affective and the notion of learners as people with feelings. This view may smooth a path for transformation and change. In this instance, I define transformation as intrinsically connected to holistic, embodied change in meaningful insight and positive self-concept. Not only as a cognitive shift, but also an increase of awareness of the value of being in the world.</p>
                <p>Findings addressed themes grounded in a reconceptualization of the art teacher’s role to establish a safe haven of trust for vulnerability and risk taking, valuing process over product to foster a space of contribution and sharing, and ways that reflective art making may provide self-care and restoration. These findings resist traditional art education models and roles showing that therapeutic creative activity nurtured the self, heart, and spirit of these participants in expected and unexpected ways. From this research, I plan to publish an article illustrating portraiture and painting as inquiry in practice, an article about the value of affective qualities of the arts within all education settings and introduce the possibility of an arts education curriculum that moves across disciplinary boundaries of art education, community-based art education, and art therapy.</p>
                <p>Expanding on my dissertation findings, my scholarship continues to focus upon interdisciplinary collaboration (arts-based wellness that examines intersections of art education and art therapy), bridging theory and practice, advocating for aesthetic experience and artistic engagement in research, and examining underrepresented lifeworld experiences through arts-informed and arts- based research. As a scholar, I seek to make arts-based research more accessible for teachers in their own practice, as well as contribute to its theoretical foundation for scholars. My recent research, an exploration of self-expressive artmaking focusing on self-care during the COVID19 pandemic of 2020, fosters a holistic view of art education as arts-based wellness for those who have experienced trauma. The purpose of this study is to listen to and understand ways that a group of educators/teachers respond to an online studio art class that focuses on self-care and wellness during a time of COVID19 world-wide pandemic. I sought an understanding of the extent to which, how and why such an activity might be perceived by the participants as therapeutic. I want to understand what this creative art experience might have on their future self-care practice, teaching practice, interactions with others, and the culture in which they find themselves working. This study used arts-based and arts-informed methods to analyze, reconstruct, and represent findings but also to generate questions around the affective therapeutic realm of self-care through expressive art making. </p>
                <p>These research projects were inspired by the voice and philosophy of artist/teacher Friedl Dicker Brandeis. Her interest in equitable art education led her to teach kindergarten teachers, children of refugees and, in the final two years of her life, children in the Nazi internment camp at Theriesenstadt, Prague. She provided a therapeutic model of art education that inspired the art therapy movement in the United States. While many artists in the Nazi internment camp recorded the awful circumstances in which they were imprisoned, Dicker Brandeis provided aesthetic experiences for the children in her charge (Wix, 2010). She was aware that by teaching children to master art essentials through self-expression, she was creating personal space for “empowerment, meaning, and freedom amid dreadful oppression and daily horrors” (Wix, 2010, p. 19). She tapped into their dreams and hopes for the future. Her journey ended when she was sent to Auschwitz and, in a final act of bravery, she packed and hid two suitcases of the children’s artwork. These works now reside at the Jewish Museum in Prague. Through Friedl Dicker Brandeis, art therapy has a strong history in art education (Kramer, 1980) but, "Rarely in the literature of art education are new teachers aware of art therapy techniques, since few programs include art therapy in their curriculum" (Alter-Muri, 2017, p. 20). I hope to contribute by engaging in research on the affective significance of arts-based programs and provide a linking bridge between art education and art therapy. Authors Barone (2008), Carroll (2006), Eisner (2002), and Greene (2001) have argued that creative activity can make positive contributions toward the minds, spirits, and imaginations of all individuals both in and out of the classroom. Thus, I am currently working from a research grant to investigate the experiences and perspectives of Friedl Dicker Brandeis about the use of artmaking to promote self-reflection and therapeutic resolution. By bridging this divide and initiating questions of how or whether strategies from art therapy are perceived to target or enhance issues of self-care and restoration, this investigation has the potential to shed new light on their usefulness for art education practice as I continue to broaden current approaches to art education. </p>

                <div className='references'>
                    <h2>References</h2>
                    <p>
                        Alter-Muri, S. B. (2017). Art education and art therapy strategies for autism spectrum disorder students.
                        <em> Art as Therapy: Art Education,</em> 70(5), 4-5. </p>
                    <p>
                        Andrus, L. (2006). Art education, art therapy and therapeutic teaching: Definitions, distinctions
                        and common ground. In B. L. Gerber & D. P. Guay (Eds.),
                        <em> Reaching and teaching special needs through art</em> (pp. 177–188). Reston, VA: National Art Education Association.
                    </p>
                    <p>
                        Barone, T. (2008). How arts-based research can change minds. In M. Cahnmann-Taylor & R. Siegesmund (Eds.),
                        <em> Arts-based research in education: Foundations for practice. </em>Routledge.
                    </p>
                    <p>
                        Behar, R. (1996).
                        <em> The vulnerable observer. Anthropology that breaks your heart.</em> Boston: Beacon Press.
                    </p>
                    <p>
                        Butler-Kisber, L. (2010).
                        <em> Qualitative inquiry: Thematic, narrative and arts- informed perspectives. </em>Sage Publications.
                    </p>
                    <p>
                        Carroll, K. L. (2006). Development and learning in art: Moving in the direction of a holistic paradigm for art education.
                        <em> Visual Arts Research, </em>16
                    </p>
                    <p>
                        Clandinin, D. J., & F. M. Connelly. (2000).
                        <em> Narrative inquiry: Experience and story in qualitative research. </em>San Francisco: Jossey Bas.
                    </p>
                    <p>
                        Eisner, E. (2002).
                        <em> The arts and the creation of mind. </em>New Haven, CT: Yale University Press.
                    </p>
                    <p>
                        Greene, M. (2001).
                        <em> Variations on a blue guitar: The lincoln center institute lectures on aesthetic education. </em>New York, NY: Teachers College Press.
                    </p>
                    <p>
                        hooks, b. (2000).
                        <em> Feminist theory: From margin to center. </em>Pluto Press.
                    </p>
                    <p>
                        Irwin, R., & De Cosson, A. (Eds.). (2004).
                        <em> A/r/tography: Rendering self through arts-based inquiry. </em>Vancouver, British Columbia, Canada: Pacifica Educational Press.
                    </p>
                    <p>
                        Irwin, R., Beer, R., Springgay, S., Grauer, K., Xiong, Gu and Bickel, B. (2006). The rhizomatic relations of a/r/tography.
                        <em> Studies in Art Education, </em>48 (1), 70-88.
                    </p>
                    <p>
                        Jongeward, C. (1997). Visual portraits: An artistic approach to qualitative educational research. In P. Leavy (Ed).
                        <em> Method meets art: arts-based research practice. </em>(pp. 253-265). New York, NY: Guilford.
                    </p>
                    <p>
                        Kramer, E. (1980). Art therapy and art education: Overlapping functions.
                        <em> Art Education, 33</em>(4), 16.
                    </p>
                    <p>
                        Leavy, P. (2012). Introduction in
                        <em> Visual arts research special issue </em>on A/r/tography, <em>38(2), 6–10.</em>
                    </p>
                    <p>
                        Leavy, P. (2015). <em>Method meets art, second edition: Arts-based research practice. </em>Guilford Publications.
                    </p>
                    <p>
                        Love, B. (2019). <em>We want to do more than survive: Abolitionist teaching and the pursuit of educational freedom. </em>Beacon Press.
                    </p>
                    <p>
                        McGregor, S. L. (2004). The nature of transdisciplinary research and practice. <em>Kappa Omicron Nu Human Sciences Working Paper Series.</em>
                    </p>
                    <p>
                        Moustakas, C. (2001). Heuristic research: Design and methodology. In K. Schneider, J. Bugental, & J. Pierson.
                        <em> The Handbook of humanistic psychology: Leading edges in theory, research, and practice, </em>(pp. 263-273).
                    </p>
                    <p>
                        O’Donoghue, D. (2009). Are we asking the wrong questions in arts-based research?
                        <em> Studies in Art Education, 50</em>(4), 352-368.
                    </p>
                    <p>
                        Tanesini, A. (1999). <em>An introduction to feminist epistemologies. </em>Malden, MA: Blackwell Publishers.
                    </p>
                    <p>
                        Tatum, B. D. (1997). <em>"Why are all the Black kids sitting together in the cafeteria?": And other conversations about race.</em> New York: Basic Books.
                    </p>
                    <p>
                        Wix, L. (2010). Aesthetic empathy in teaching art to children: The work of Friedl Dicker-Brandeis in Terezin.
                        <em> Art Therapy: Journal of American Art Therapy Association,</em> 26(4), 152-158.
                    </p>
                </div>
            </div>
		  </Modal.Body>
		  <Modal.Footer>
			<Button variant="secondary" onClick={handleClose}>
			  Close
			</Button>
			{/* <Button variant="primary" onClick={handleClose}>
			  Save Changes
			</Button> */}
		  </Modal.Footer>
		</Modal>
	  </>
    );
}
