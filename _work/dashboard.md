---
layout: article
weight: 1
color: ffffff
title: Features for an improved car digital dashboard.
client: Personal
snippet: Features for an improved car digital dashboard.
tags:
    - ui
    - ux
    - sketch
    - react
subjects:
    - dashboards
    - usability
    - prototyping

cta_label: View slides
cta_href: https://docs.google.com/presentation/d/1kxBuHmhbf1CzSe-ApM54Vh962DHiHwe1E8zfulMCdas/edit?usp=sharing
---

## Problem
There is a trend for digital dashboards in cars. Take the existing physical dashboard and digitise it. They do not take full advantage of the digital display. Except in adding extravagant decoration, menus and animations. This adds to the complexity of the car.

There is a huge opportunity in in-car UI design now. To re-think the dashboard and console we need to ask question; what does a driver need? Two of these requirements are **clarity** and **anticipation**.

![Digital dashboard that looks physical](images/digital_physical_dashboard.jpg)
*This is physical. This is digital.*

When the car dashboard was physical, it's immalleable state limited it. Designers and engineers needed to include an array of symbols, gauges and numbers. Even if some were rarely useful. With a digital dashboard, it is infinitely changeable. But digital dashboards today still include warning lights without any explanation. Drivers do not know what they mean. And they shouldn’t need to remember them or refer to a handbook.

There was a [British study](https://www.livescience.com/38579-drivers-confused-dashboard-lights.html) based on 2000 car drivers. It found that 98% of them did not understand what the most common warning lights meant. The most understood symbols are the ones that appear most often. But the symbols that appear less are the ones that are not as understood. Less frequent symbols are usually the more important ones. The majority of people in the survey said they continued driving for more than a week. Taking an average of 12 days to get their car fixed. This is hazardous.

![SYMBOLS!!](images/symbols.jpg)

The engine icon is deceptively simple. Of course it means something is wrong with the engine. But what is wrong with the engine? Imagine if your phone had a problem and just said “check phone”.

The fuel icon is the most recognized. But it has a little secret. I’m not sure how many people know what the arrow means? It’s to indicate what side the fuel cap is on. It’s very tiny on the dashboard though.

![Screenshot of the macOS dock with tooltip label showing over an icon](images/computer_labels.jpg)
*The best icon is a text label.*

Personal computer interfaces have already solved this problem. When was the last time you referred to your computer's owner manual to figure out what an icon meant?

## Solution
The digital dashboard should only include information that is highly relevant to the drivers needs. Information that is glanceable and on demand.

Driving a car is a reactionary experience. When something goes wrong, you react to the problem and treat the symptom. For example, if you are low on fuel you will have to decide what to do. Should I risk driving further, or, do I stop and find the nearest gas station?

Problems are on the driver to deal with. But the car has more information than the driver could ever have.

Cars today could take full advantage of a connected world. They are integrated to their various internal sensors. And can connect to external online services. Yet, the integration between both the internal and external is rarely taken advantage of.

With an anticipatory experience, the car can predict and prevent a problem. We can re-look at the low fuel example in a new way. If the driver is following a GPS route to a destination, the car can add a stop to a gas station along their journey. If there are no gas stations enroute, it can suggest actions to take before you even start driving.

Predictions on occasion can and will be wrong. But connected cars can upload their successes and failings to centralised place. And then have machine learning analyse it. And this is only the surface of what a connected and predictive car system could do.

## Implementation
I’ve focused on two key features for the dashboard. Status and Detour. Both these features have the dashboard and console working together in tandem.

This is the dashboard I’ve designed. It’s pretty simple. There is a speedometer on the right side and a status bar at the bottom.

[Dashboard design intro]

### Status

[Dashboard notification example]

This is an example of a status notification appearing. Notifications appear in the dashboard to explain something. This notification alerts the driver that the tyre pressure is low. A subtle animation in the driver's visions catches their attention. ​After which the notification hides and a icon displays in the status bar. At the same time, a status card appears on the driver's console. The driver can then view the console to take action in their own time. Or have a passenger do it.

[Console notification example]

### Detour
In this example for the console, they can find a service station, or call for help. It can offer different routes that respond to events inside and outside of the car. Detours are suggested based on internal factors such as engine problems. Or external ones like how to avoid heavy traffic.

In this example the driver is running out of petrol. A detour gets added to the nearest petrol station. And this appears in tandem on the console as a status card. This is useful so that a passenger to confirm the Detour for the driver.

## Conclusion
This is technically feasible
The cars have the sensors already but the software is not there yet

## Research
### General
- [Why The Car Industry Needs To Rethink The Dashboard User Interface Design](https://techcrunch.com/2015/10/08/why-the-car-industry-needs-to-rethink-the-dashboard-user-interface-design/)
- [Car Dashboard UI Collection](https://medium.com/@dnevozhai/car-dashboard-ui-collection-123ce3ab5303)

### Warning lights
- [Most Drivers Baffled by Dashboard Lights](https://www.livescience.com/38579-drivers-confused-dashboard-lights.html)
- [Car dashboard warning lights explained](https://www.confused.com/on-the-road/maintenance/dashboard-warning-lights-explained)

### Is the speedometer and other dials still useful?
- [Speedometer Design: Why It Works](https://visual.ly/blog/speedometer-design-why-it-works/)
- [The tachometer – the most useless car component… at Commonsense Design](http://designblog.nzeldes.com/2008/10/the-tachometer-the-most-useless-car-component/comment-page-1/)
- [Ustwo reimagines the in-car cluster](https://vimeo.com/119123983)

###  Smart dashboard
- [OSLO - multimodal car display concept](https://www.terriechan.com/car-display)

## Further reading
- [Human machine interfaces](https://drive.google.com/open?id=0B2U2YEQghVvQWlRtQkdsY1lKcmM)
- [Usability evaluation of fuel gauges for hybrid electric vehicles](https://drive.google.com/open?id=0B2U2YEQghVvQYVVfNVlYTjA3LU0)
- [Usability of Car Dashboard Displays for Elder Drivers](https://drive.google.com/open?id=0B2U2YEQghVvQUjYxbmdLcGNCcW8)
