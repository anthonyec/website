One project of mine came to mind when reading this chapter. I've fell for the trap of separating modules and generalising too much.

For context, this project is a drawing tool. Nodes can be added to the canvas and connected visually with lines. Allowing you to create vector networks, similar to Figma.

After a messy prototype, I tried to "clean" up the code by splitting up the modules. I had a module to handle creating the HTML canvas, a module to handle the rendering of nodes and lines and 2 modules that handled the data structures. These 2 data structures were a drawing graph to handle node and their connections. And a spatial structure to handle spatial hashing and hit detection.

The spatial structure needs to be updated each time the drawing graph changes. The 2 data structures can easily become out-of-sync. In this project one is not used without the other, so separating and generalisng them is probably not nesscary and makes things harder to work with.


While comments help avoiding having to read the code, sometimes many comments are not helpful because they repeat the code. It's a red flag if the comment is just using the same words as the code, for example repeating an interface name in an expanded way (TODO: Reword)

There are many moments in my work life that I wish I had this quote.




# Reading notes: A Philosophy of Software Design

It's a small book, at 170 pages. But it says what it needs to simply and to the point.

I'm making notes because...

Check out a review of the book for a more in-depth review. <!-- TODO: Reword -->

## Shallow vs deep


## General vs special purpose
> One of the most common decisions that you will face when designing a new module is wheneter to implement it in a general-purpose or special purpose fashion.


## Better together or better apart?

I'm defiently a victim of trying to make general purpose classes where it'd be better to just include all that in the class. Instead of trying to link classes up, maybe one class can initiate another. Or use the functions inside it. TODO: Find quote on if a class is using another, it might as well include it.

> Bring together if information is shared
<!-- p.60 -->

- They share information
- They are used together
- They overlap conceptually
- It is hard to understand one of the piece of code without looking at the other

One project of mine came to mind when reading this chapter. I've fell for the trap of separating modules and generalising too much.

For context, this project is a drawing tool. Nodes can be added to the canvas and connected visually with lines. Allowing you to create vector networks, similar to Figma.

After a messy prototype, I tried to "clean" up the code by splitting up the modules. I had a module to handle creating the HTML canvas, a module to handle the rendering of nodes and lines and 2 modules that handled the data structures. These 2 data structures were a drawing graph to handle node and their connections. And a spatial structure to handle spatial hashing and hit detection.

<!-- TODO: Reword this to make a few sentences long -->

```ts
const [_, context] = createCanvas2D();
const drawing = createDrawingGraph();
const renderer = createRenderer(context, drawing);
const spatial = createSpatialStructure();

spatial.parseFromGraph(drawing);
```

The spatial structure needs to be updated each time the drawing graph changes. The 2 data structures can easily become out-of-sync. In this project one is not used without the other, so separating and generalisng them is probably not nesscary and makes things harder to work with.


## Comments and documentation
A few chapters dedicate themselves to comments and documentation.

There's a common belief that comments are to be avoided because good code will documenting itself. One of my favourite quotes in the book was an answer to this.

> If users must read the code of a method in order to use it, then there is no abstraction.
<!-- p.97 -->

I wish I had this line as a comeback in the past.

This doesn't excuse writing useless comments.

Programming is about creating abstractions. If people who use our code needs to read it to know how it works, then the abstraction has failed.

>

Differentiation between interface and implementation comments. Interface comments are... Implemention comments are.... Both require different ways to make good comments (TODO: reword).

> The main goal of implementation comments is to hep reads understand _what_ the code is

> If the information in a comment is already obvious from the code next to the comment, then the comment isn't helpful. One example of this is when the comment uses the same words that make up the name of the thing it is describing.
>
>

While comments help avoiding having to read the code, sometimes many comments are not helpful because they repeat the code. It's a red flag if the comment is just using the same words as the code, for example repeating an interface name in an expanded way (TODO: Reword)

> A first step towards writing good comments is to use different words in the comment from those in the name of the entity being described.
>
> Pick words for the comment that provide additional information about the meaning of the entity, rather than just repeating its name.
<!-- p.105 -->









I like that this book splits comments into interface and implementation. <!-- TODO: Expand on -->

> The main goal of implementation comments is to help reads understand _what_ the code is.
<!-- TODO: PUT A QUOTE HERE -->
