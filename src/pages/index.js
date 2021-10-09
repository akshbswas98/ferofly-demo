import React from "react";
import theme from "theme";
import { Theme, Link, Button, LinkBox, Section, Em, Text, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Menu } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background-color="--dark"
			text-align="center"
			padding="32px 0"
			align-items="center"
			justify-content="center"
			flex-wrap="wrap"
			align-content="space-between"
		>
			<Override
				slot="SectionContent"
				align-items="start"
				justify-content="center"
				align-content="center"
				display="inline-grid"
				flex-direction="row"
				align-self="flex-start"
				grid-auto-flow="row dense"
				justify-items="start"
				flex="1 1 0%"
				order="-1"
			/>
			<LinkBox display="inline-block" letter-spacing="normal">
				<Button background="#060606" active-color="#6d7277" hover-color="#6d7074">
					<div display="none !important" />
					<div />
					HOME
				</Button>
				<Button background="#0a0a0b" color="#eef4fd" hover-color="#777d85">
					<div display="none !important" />
					<div />
					<div />
					<div />
					<div />
					ABOUT
				</Button>
				<Button background="#070707" hover-color="#575e64">
					<div display="none !important" />
					<div />
					ROOMS
				</Button>
				<Button background=" #090909" hover-color="#555b60">
					<div display="none !important" />
					<div />
					SERVICES
				</Button>
				<Button background=" #090909" color="#edf3f9">
					<div display="none !important" />
					<div />
					GALLERY
				</Button>
				<Button background=" #090909" hover-color="#585e64">
					<div display="none" />
					SEE & DO
				</Button>
				<Button background="#090909" hover-color="#5b6168">
					<div display="none" />
					CONTACT
				</Button>
				<Button background=",#090909" hover-color="#5b6168" hover-background="#f9f3f3">
					BookARoom
					<div display="none" />
					<div />
				</Button>
			</LinkBox>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="normal 900 72px/1.2 --fontFamily-serifGaramond" md-font="--headline2" margin="20px 0 0 0">
				<Em>
					Ferofly
				</Em>
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="10px 0 0 0"
				order="0"
				align-self="auto"
				flex="0 1 auto"
				position="relative"
				display="block"
				width="fit-content"
				text-align="center"
			>
				Magnify your Journey-
			</Text>
			<br />
			<br />
			<Image width="980px" height="631px" src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
		</Section>
		<Components.QuarklycommunityKitNetlifyForm />
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="normal 500 28px/1.2 --fontFamily-serifGaramond" md-font="--headline2" margin="20px 0 0 0">
				ABOUT{" "}
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.{"\n\n"}
			</Text>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80) center/contain">
			<Override
				slot="SectionContent"
				align-self="flex-end"
				align-content="stretch"
				flex-wrap="wrap"
				position="static"
				align-items="center"
				order="0"
				flex="0 1 auto"
			/>
			<Box max-width="370px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					{"           "}OUR ROOMS
				</Text>
				<Text font="--base">
					I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.{"\n\n"}
				</Text>
				<Button
					display="block"
					position="static"
					text-align="center"
					background="#e6ecf0"
					hover-color="#131b1b"
				>
					<div display="none" />
					Book
				</Button>
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
			height="100% border-box"
			justify-content="center"
			align-content="center"
		>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--lead"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
				text-align="center"
				align-self="center"
			>
				Our Services
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Breakfast
						<br />
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Garden
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Pool
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Free Wifi
					</Text>
				</StackItem>
			</Stack>
			<Image width="64px" height="64px" src="https://images.unsplash.com/photo-1542276867-c7f5032e1835?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
		</Section>
		<Components.QuarklycommunityKitCarousel>
			<Override slot="Slide Head 1">
				Gallery
			</Override>
			<Override slot="Slide Head" color="#0e0e0f" />
			<Override slot="Slide Text 1" />
			<Override slot="Slide Link" opacity="0" />
		</Components.QuarklycommunityKitCarousel>
		<Section background="--color-light" color="--dark" padding="64px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
						margin="0"
					>
						{" "}CONTACT US
					</Text>
					<Text font="--headline2" max-width="500px" margin="10px 0 0 0">
						Email us, we would love to hear form you
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%" />
			</Stack>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
				<Override slot="link-index">
					ferofly
				</Override>
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				ferofly@contact.com
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"61619a6f790876002294dad9"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});