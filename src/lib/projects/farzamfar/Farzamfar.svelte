<script>
	import Slider from "../../components/Slider.svelte";

	import Image1 from "./1.jpg?width=600;1200&jpg&srcset";
	import Image2 from "./2.jpg?width=600;1200&jpg&srcset";
	import Image3 from "./3.jpg?width=600;1200&jpg&srcset";
	import Image4 from "./4.jpg?width=600;1200&jpg&srcset";
	import Image5 from "./5.jpg?width=600;1200&jpg&srcset";

	const images = [Image4, Image5];
</script>

<img srcset={Image1} alt="Image1" />

<p>
	Several scientific studies have shown the important role of touch in
	sensorial experiments of the spaces such as hospitals. This project aims to
	study and experiment with the side-rail of the patient bed in the hospital
	room. Side-rail is one of the main parts of the patient bed. The main role
	of the side-rail is providing the security of patients and preventing them
	from falling, but also helping them to get up. The common materials of
	side-rails are metal (stainless steel) and polymers (rigid plastic). The
	reason is that these materials can be easily sanitized and cleaned every
	day. However, the side-rail is one of the main parts of the bed that is
	being touched by patients regularly and the cold and slippery surfaces of
	metal and plastic, provide an unpleasant feeling.
</p>

<p>
	Studies have shown that touching soft and warm materials make people feel
	pleasant and create a more comfortable and relaxing experience for them. So,
	this project focuses on soft and warm fabrics that are familiar, accessible,
	and inexpensive and washable in high degrees. So, after investigating
	different fabrics for the bed rail cover, the final selected materials
	include velvet, cotton with a dense or low pile, faux fur, dimple fleece and
	terry silicon.
</p>

<img srcset={Image2} alt="Image2" />

<p>
	For the purpose of bed rail cover, two alternatives are designed: one manual
	and one automatic. The main difference between these two alternatives is the
	time period between changing the fabric cover and sending that to the
	sanitation department. In addition, the manual option covers a part of the
	bedrail and can be moved readily along the rail, while the automatic one
	offers a fixed coverage that covers the whole side-rail.
</p>

<img srcset={Image3} alt="Image2" />

<p>
	In the first alternative, the cover is made from the selected fabrics and
	the Velcro tape is applied for the ease of attaching and detaching to the
	side-rail by patient, staff, and family members every day. Also, it has been
	tried to achieve a spongy form by putting foam inside some fabrics or sew 2
	or 3 layers together. This attitude would persuade the users to be able to
	squeeze and distract themselves away from stress or pain. In this way, it
	would act as a simulation of a stress ball which has been found to reduce
	levels of anxiety and pain in patients.
</p>

<Slider {images} />

<p>
	The second alternative provides the possibility of detaching the cover for
	sanitation purposes after a couple of days instead of every day with the aid
	of implementing the electronic system and using a fabric roll. After putting
	the fabric roll on the holder, the fabric should be installed on the
	side-rail and attached to the shaft manually. Then, the staff can every day
	renew the cover by pushing the button. After all the fabric roll is used
	completely, it can be removed and sent to the sanitation department and the
	new and clean fabric roll will be installed again.
</p>
