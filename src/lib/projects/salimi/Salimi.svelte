<script>
	import Slider from "../../components/Slider.svelte";

	import Image1 from "./1.png?width=600;1200&png&srcset";
	import Image2 from "./2.png?width=600;1200&png&srcset";
	import Image3 from "./3.png?width=600;1200&png&srcset";
	import Image4 from "./4.png?width=600;1200&png&srcset";
	import Image5 from "./5.png?width=600;1200&png&srcset";
	import Image6 from "./6.png?width=600;1200&png&srcset";

	const images = [Image2, Image3, Image4];
</script>

<img srcset={Image1} alt="Image1" />

<p>
	The term “sojourner” refers to people living in a culture other than their
	own. When sojourners go to a new country to work, study, their unfamiliarity
	with the differences in behaviors, ways of living, communicating, etc., may
	result in <i>misunderstandings</i> and exclusion from communities. Their exclusion
	from communities may lead them to experience cultural shocks and psychological
	effects that prevent them from being effective in their overseas assignments.
</p>

<p>
	Developing an intercultural training application for international students
	coming to Montreal was the focus of my project for this course. Focusing on
	a narrower range of audience was a way for me to experiment in the field and
	take a step for my final research project.
</p>

<Slider {images} />

<p>
	According to Shepherd, a lot of currently existing pieces of training are
	referred to as “museum approaches” where the participants briefly see the
	cultural differences and traditions initially and do not have the chance to
	“absorb the meanings and implement them into practice.” So the main question
	that I tried to focus on was, how can I develop an application that
	facilitates Iranian students’ learning process and help them implement the
	acquired knowledge into practice through an interactive application?
</p>

<p>
	The process that I undertook and led me to the final prototype that I
	designed was:<br />
	1) Doing interviews with Persian-Canadian students<br />
	2) Brainstorming, designing, and reflecting<br />
	3) Testing<br />
</p>

<img srcset={Image6} alt="Image5" />

<p>
	For the first part, I developed a virtual dining scenario wherein an Iranian
	joined a person from Montreal and had the chance to talk and see what kinds
	of difficulties they would face when communicating with each other,
	exchanging their culture, etc.
</p>

<p>
	I asked them to go through live hosting and guesting sessions and be each
	other's host and guest as if they would in real life. I chose this to happen
	over a virtual table of foods because I think foods have culture embedded
	within them. Especially sitting around a table to eat would allow people to
	exchange their culture, which everyone likes. I did two hosting-guesting
	sessions besides having individual interviews with each of the participants.
</p>

<p>
	The second part was doing visual thinking, sketching, and designing
	wireframes. And at last, I did a heuristic evaluation test that allowed me
	to find the system’s flaws.
</p>

<img srcset={Image5} alt="Image6" />

<p>
	The final prototype is an application consisting of three steps: pre-Party
	training, Virtual Party, and Physical Party. The three steps will prepare a
	person for an international party and help them expand their communication
	skills along the way. The green leaves are a symbol of growth, and the more
	the trainees learn, the greener the leaves become. The learning aspect
	tapers off as they go further in the application, and the practice aspect
	becomes bolder. The first part provides the opportunity for the trainees to
	get familiar with the language and learn slang, jokes, etc., to be able to
	understand more what people talk about when they are at a party. The second
	part is about how you can start a conversation with topics that are related
	to Montreal. The third part is based on the model of culture assimilator by
	Harry Triandis, where people can get familiar with the culture through
	seeing critical incidents. The second step is a virtual party that joins two
	people anonymously and asks them to prepare a virtual table of food for each
	other and talk about it. And the last step for the trainees is to go to a
	physical party and apply all their acquired skills to real life.
</p>
