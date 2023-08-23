import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/dom';
import Card from './Card';

describe('Card Component', () => {
    const recipe = {
        "metadata": {
            "tags": []
        },
        "sys": {
            "space": {
                "sys": {
                    "type": "Link",
                    "linkType": "Space",
                    "id": "kk2bw5ojx476"
                }
            },
            "id": "437eO3ORCME46i02SeCW46",
            "type": "Entry",
            "createdAt": "2018-05-07T13:32:04.593Z",
            "updatedAt": "2018-05-07T13:36:41.741Z",
            "environment": {
                "sys": {
                    "id": "master",
                    "type": "Link",
                    "linkType": "Environment"
                }
            },
            "revision": 3,
            "contentType": {
                "sys": {
                    "type": "Link",
                    "linkType": "ContentType",
                    "id": "recipe"
                }
            },
            "locale": "en-US"
        },
        "fields": {
            "title": "Crispy Chicken and Rice\twith Peas & Arugula Salad",
            "photo": {
                "sys": {
                    "type": "Link",
                    "linkType": "Asset",
                    "id": "5mFyTozvSoyE0Mqseoos86"
                }
            },
            "calories": 785,
            "description": "Crispy chicken skin, tender meat, and rich, tomatoey sauce form a winning trifecta of delicious in this one-pot braise. We spoon it over rice and peas to soak up every last drop of goodness, and serve a tangy arugula salad alongside for a vibrant boost of flavor and color. Dinner is served! Cook, relax, and enjoy!",
            "chef": {
                "sys": {
                    "type": "Link",
                    "linkType": "Entry",
                    "id": "NysGB8obcaQWmq0aQ6qkC"
                }
            },
            "tags": [
                {
                    "sys": {
                        "type": "Link",
                        "linkType": "Entry",
                        "id": "61Lgvo6rzUIgIGgcOAMgQ8"
                    }
                },
                {
                    "sys": {
                        "type": "Link",
                        "linkType": "Entry",
                        "id": "gUfhl28dfaeU6wcWSqs0q"
                    }
                }
            ],
            "file": {
                "url": "//images.ctfassets.net/kk2bw5ojx476/5mFyTozvSoyE0Mqseoos86/fb88f4302cfd184492e548cde11a2555/SKU1479_Hero_077-71d8a07ff8e79abcb0e6c0ebf0f3b69c.jpg",
                "details": {
                    "size": 230068,
                    "image": {
                        "width": 1020,
                        "height": 680
                    }
                },
                "fileName": "SKU1479_Hero_077-71d8a07ff8e79abcb0e6c0ebf0f3b69c.jpg",
                "contentType": "image/jpeg"
            }
        }
    }

    beforeEach(() => {
        render(
            <BrowserRouter>
                <Card recipe={recipe} />
            </BrowserRouter>
        );
    });

    it('should render the title and image correctly', () => {
        const imageElement = screen.getByRole('img');
        const titleElement = screen.getByRole('heading');

        expect(imageElement).toBeDefined();
        expect(imageElement.className).toBe('card__photo');
        expect(titleElement.className).toBe('card__title');
        expect(titleElement.textContent).toBe(recipe.fields.title);
    });

    it('should navigate to the correct recipe detail page when clicked', () => {
        const linkElement = screen.getByRole('link');
        fireEvent.click(linkElement);

        const hrefAttribute = linkElement.getAttribute('href');

        if (hrefAttribute) {
            const urlParts = hrefAttribute.split('/');
            const idFromUrl = urlParts[urlParts.length - 1];
            expect(idFromUrl).toBe(recipe.sys.id);
        } else {
            // Handle the case where hrefAttribute is null
            fail('href attribute is null');
        }
    });

});