<!-- thumbnail: ./book_cover.gif -->
<!-- pinned: true -->
<!-- twitterSocialImage: ./book_cover.gif -->

# Reading notes: A Philosophy of Software Design

![Drawing of the book cover for A Philosophy of Software Design](./book_cover.gif)

Here are my notes on [A Philosophy of Software Design by John Ousterhout](https://www.amazon.co.uk/Philosophy-Software-Design-2nd-ebook/dp/B09B8LFKQL/ref=sr_1_1?crid=15RRQNVVGGPTM&keywords=A+Philosophy+of+Software+Design&qid=1659823295&sprefix=a+philosophy+of+software+design%2Caps%2C177&sr=8-1).

It's a small book at 178 pages that says what it needs to say simply and to the point.

This isn't a review of the book, for that check out [Pragmatics Engineer's great post and video](https://blog.pragmaticengineer.com/a-philosophy-of-software-design-review/). I'm just noting parts that relate and stand out to me.

## Shallow vs deep
<!-- TODO: Add stuff about shallow code? -->

## Different layer, different abstractions
> The interface of a class should normally be different from its implemention: the representions used internally should be different from the abstractions that appear in the interface.
<!-- p.50 -->


> Information leakage occurs when a design decision is reflected in multiple modules.

## Together or apart?

It's hard to decide when pieces of code should be separate or together. Here are some good points to think about when deciding.

> Bring pieces of code together is the most beneficial if they are closely related [...] Here are a few indications that two pieces of code are related:
> - They share information.
> - They are used together.
> - They overlap conceptually.
> - It is hard to understand one of the piece of code without looking at the other.
<!-- p.60 -->

I was reminded of a [small drawing tool](https://github.com/anthonyec/211203_wiggle_path/) I was creating. I tried to "clean" up the code by moving things into more generalized modules.

```ts
const [_, context] = createCanvas2D();
const drawingGraph = createDrawingGraph();
const renderer = createRenderer(context, drawing);
const spatialStructure = createSpatialStructure();

// Spatial structure needs to be updated
// whenever the drawing graph changes.
spatialStructure.parseFromGraph(drawing);
```

However, this made the code hard to work with and introduced the need to keep parts of it in sync, `drawingGraph` and `spatialStructure`.

A better solution would be to instantiate a generalized module inside another because they are used together and share information.

## Code comments

One of my favourite quotes in the book is an answer to the belief that comments should be avoided because good code will document itself.

> If users must read the code of a method in order to use it, then there is no abstraction.
<!-- p.97 -->

This is a good rule of thumb for writing comments. <!-- TODO: Expand on -->

> A first step towards writing good comments is to use different words in the comment from those in the name of the entity being described.
<!-- p.105 -->

I like that this book splits comments into interface and implementation. <!-- TODO: Expand on -->

> The main goal of implementation comments is to help reads understand _what_ the code is.
<!-- TODO: PUT A QUOTE HERE -->


<!-- TODO: Add note about if other cant read it, it's not obvious -->
