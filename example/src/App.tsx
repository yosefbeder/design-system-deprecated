import styled from 'styled-components';
import '../../src/index.css';
import {
	H1,
	H2,
	H3,
	withId,
	P1,
	P2,
	Ul,
	Ol,
	Strong,
	Italic,
	InlineCode,
	Link,
} from '../../src/typography';
import Button, {
	PrimaryLoadingSpinner,
	SecondaryLoadingSpinner,
	TertiaryLoadingSpinner,
} from '../../src/components/Button';

const H2WithId = withId(H2);
const H3WithId = withId(H3);

const Article = styled.article`
	width: 100%;
	max-width: 45rem;
	min-height: 100vh;
	margin: 0 auto;
	padding: 0.05px;
`;

const ButtonGroup = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: start;
`;

function App() {
	return (
		<Article>
			<H1>Components</H1>
			<H2WithId>Typography</H2WithId>
			<H3WithId>Paragraphs</H3WithId>
			<P1>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente
				ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam
				voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea.
			</P1>
			<P2>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente
				ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam
				voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea.
			</P2>
			<H3WithId>Lists</H3WithId>
			<P1>
				Ways to declare{' '}
				<Link
					href="https://en.wikipedia.org/wiki/Variable_(mathematics)"
					target="_blank"
				>
					variables
				</Link>{' '}
				<Italic>constants</Italic> in javascript:
			</P1>
			<Ul>
				<P1 as="li">
					<InlineCode>let</InlineCode>: a variable that can be changed later and{' '}
					<Strong>block-scoped</Strong>.
				</P1>
				<P1 as="li">
					<InlineCode>const</InlineCode>: a constant that can't be changed later
					and <Strong>block-scoped</Strong>.
				</P1>
				<P1 as="li">
					<InlineCode>var</InlineCode>: a variable that can't be changed later
					and <Strong>function-scoped</Strong>.
				</P1>
			</Ul>
			<P1>
				Steps to declare <Italic>them</Italic>:
			</P1>
			<Ol>
				<P1 as="li">Think of the the name of it.</P1>
				<P1 as="li">Think whether it will change or not.</P1>
			</Ol>
			<H2WithId>Buttons</H2WithId>
			<H3WithId>Primary Button</H3WithId>
			<ButtonGroup>
				<Button>Normal</Button>
				<Button state="loading" leftIcon={<PrimaryLoadingSpinner />}>
					Loading
				</Button>
				<Button state="disabled">Disabled</Button>
			</ButtonGroup>
			<H3WithId>Secondary Button</H3WithId>
			<ButtonGroup>
				<Button variant="secondary">Normal</Button>
				<Button
					variant="secondary"
					state="loading"
					leftIcon={<SecondaryLoadingSpinner />}
				>
					Loading
				</Button>
				<Button variant="secondary" state="disabled">
					Disabled
				</Button>
			</ButtonGroup>
			<H3WithId>Tertiary Button</H3WithId>
			<ButtonGroup>
				<Button variant="tertiary">Normal</Button>
				<Button
					variant="tertiary"
					state="loading"
					leftIcon={<TertiaryLoadingSpinner />}
				>
					Loading
				</Button>
				<Button variant="tertiary" state="disabled">
					Disabled
				</Button>
			</ButtonGroup>
		</Article>
	);
}

export default App;
