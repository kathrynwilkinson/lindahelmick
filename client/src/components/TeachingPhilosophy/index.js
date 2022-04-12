import './style.css';
import './modal.css';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function TeachingPhilosophyModal () {
    const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    return (

        <>
		<Button variant="primary" onClick={handleShow}>
		  Teaching Philosophy
		</Button>

		<Modal
			show={show}
			onHide={handleClose}
			dialogClassName="modal-90w"
		>
		  <Modal.Header closeButton>
			<Modal.Title>Teaching Philosophy</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>
            <div className='teaching-philosophy-statement'>
                {/* <h1>Philosophy of Teaching</h1> */}
                <p>As a White, queer artist/researcher/teacher who works toward critical self-reflective anti-racist feminist philosophies, I engage in creative activity, in its most holistic form, with wellness and inclusion at the heart of these investigations. This includes a reconceptualization of the role of the art teacher to establish a haven of trust for vulnerability, risk taking, selfcare and restoration in the classroom and out in the community. My goal is to simply emphasize that the art educator may purposefully facilitate learners, through a more therapeutic art education model, to better access affect and open safe creative places to be vulnerable through which students might discover their own internal creative agency.</p>
                <p>Empathetic anti-racist work is a continuous process of critical self-reflection and reconstruction. A lifelong journey of falling back, staying in discomfort long enough to reflect, participating in challenging and supportive critical spaces, and then moving forward with healing and empathy. In other words, I am reminded of where I need to grow and how I can support others in the work they are doing every time I critically reflect, listen to the communities in which I work, and reconstruct from a space of asset rather than deficit.</p>
                <p>Each new idea that questions contemporary artwork and course readings has potential to create opportunities to rethink or deconstruct previously held beliefs about the place of art education in the classroom. As an anti-racist art educator, I can disrupt racism by including the contemporary work of artists who are Black, Brown, Indigenous, or LGBTQ+ in my curricula to create opportunities to rethink or deconstruct previously held beliefs. Art has always been a set of diverse making practices, interconnected to produce a wide spectrum of outcomes that render us more human and communal. Each project we undertake creates opportunities for the consideration and creation of individual notions for the possibility of contemporary art in education. Engaging in artistic inquiry opens spaces for educators to imagine the future of art education and visual literacy within their classrooms. In every class I model this inquiry process of perception, creation, critique, revision, reflection, and emphasize that this process is never linear, but always iterative. While the methods for integrating the inquiry process changes with each course, my belief remains that this process is essential, and acknowledging my feminist ideals, dialogue is imperative to education. </p>
                <p>I conceptualize dialogue as an artifact that evokes feelings, thought, and/or promotes understanding whether the artifacts are works of art, research papers, journals, or videos, their physicality acts as a catalyst for a conversation. In my classes, students dialogue with me, with others, with readings, with art, and with the world outside the classroom walls. Together we engage, respond, reflect, and transform with each encounter. Promoting situated knowledge and care for the perspectives of others, dialogue allows us to enlarge our understanding, complicate grand narratives, and become critically conscious of the world. Dialogue invites imagination and empathy while requiring vulnerability in a safe space. To create a safe classroom space I consistently build community, sit with my students rather than stand over them, model kindness and vulnerability, and write and draw with them. If I require them to write, illustrate, or talk about times they have felt scared, lost, alone, and confused, I must be willing to do the same. I appreciate that conversation occurs in multiple forms and I often use contemporary art as a vehicle to ask difficult questions about identity, freedom, justice, and equality. Greene (1995) wrote that authentic experiences with the arts lead to realistic experiences with the world. When we become aware of our self in our environment, we are transformed and a transformational approach to art pedagogy is feminist as it occurs in the context of mutual respect, cooperation, and caring for self and others (Noddings, 2012). It empowers, validates, and promotes change.
                My purpose is to use art and dialogue to communicate cultural information and support positive relationships that better promote equity, freedom, and opportunity.
                </p>
                <div className='references'>
                    <h2>References</h2>
                    <p>Arendt, H. (1958). The human condition. Chicago: University of Chicago Press.</p>
                    <p>Barone, T., & Eisner, E. W. (2012). Arts based research. Los Angeles: SAGE.</p>
                    <p>Dewey, J. (1934). Art as experience. New York, NY: The Berkley Publishing Group.</p>
                    <p>Dewey, J. (1998). How we think. New York: Houghton Mifflin.</p>
                    <p>
                        Eisner, E. (1994). The educational imagination on the design and evaluation of school
                        programs. Edited by Debra A. Stollenwerk. 3rd ed. New Jersey: Prentice Hall.
                    </p>
                    <p>Eisner, E. (1996). Cognition and curriculum reconsidered. Sage Publications (CA). </p>
                    <p>Freire (2000). Pedagogy of the oppressed. New York, NY: Continuum.</p>
                    <p>Greene, M. 1995. Releasing the imagination: Essays on education, the arts, and social change. </p>
                    <p>The Jossey-Bass Education Series. San Francisco, CA: Jossey-Bass, Inc., Publishers.</p>
                    <p>Hesse-Biber, S., & Leavy, P. (2007). Feminist research practice. Sage Publications (CA).</p>
                    <p>hooks, b. (2000). Feminist theory: From margin to center. Pluto Press.</p>
                    <p>
                        Love, B. (2019). We want to do more than survive: Abolitionist teaching and the pursuit of
                        educational freedom. Boston, MA: Beacon Press.
                    </p>
                    <p>
                        Noddings, N. 2012. The caring relation in teaching. Oxford Review of Education, 38(6): 771–
                        781.
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
