import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecipeList from './RecipeList';

jest.mock('../services/contentfulService', () => ({
    getRecipeList: jest.fn(() => Promise.resolve([
        {
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
                "id": "4dT8tcb6ukGSIg2YyuGEOm",
                "type": "Entry",
                "createdAt": "2018-05-07T13:38:22.351Z",
                "updatedAt": "2018-05-07T13:41:01.986Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 2,
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
                "title": "White Cheddar Grilled Cheese with Cherry Preserves & Basil",
                "photo": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Asset",
                        "id": "61XHcqOBFYAYCGsKugoMYK"
                    }
                },
                "calories": 788,
                "description": "*Grilled Cheese 101*: Use delicious cheese and good quality bread; make crunchy on the outside and ooey gooey on the inside; add one or two ingredients for a flavor punch! In this case, cherry preserves serve as a sweet contrast to cheddar cheese, and basil adds a light, refreshing note. Use __mayonnaise__ on the outside of the bread to achieve the ultimate, crispy, golden-brown __grilled cheese__. Cook, relax, and enjoy!",
                "tags": [
                    {
                        "sys": {
                            "type": "Link",
                            "linkType": "Entry",
                            "id": "3RvdyqS8408uQQkkeyi26k"
                        }
                    }
                ]
            }
        },
        {
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
                "id": "5jy9hcMeEgQ4maKGqIOYW6",
                "type": "Entry",
                "createdAt": "2018-05-07T13:40:27.932Z",
                "updatedAt": "2018-05-07T13:40:27.932Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 1,
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
                "title": "Tofu Saag Paneer with Buttery Toasted Pita",
                "photo": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Asset",
                        "id": "48S44TRZN626y4Wy4CuOmA"
                    }
                },
                "calories": 900,
                "description": "Saag paneer is a popular Indian dish with iron-rich spinach and cubes of paneer, an Indian cheese that is firm enough to retain it's shape, but silky-soft on the inside. We have reimagined Saag Paneer and replaced the \"paneer\" with crispy cubes of firm tofu, making this already delicious and nutritious vegetarian dish burst with protein. Toasted pita bread is served alongside as an ode to naan. Cook, relax, and enjoy! [VIDEO](https://www.youtube.com/watch?v=RMzWWwfWdVs)"
            }
        },
        {
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
                "id": "2E8bc3VcJmA8OgmQsageas",
                "type": "Entry",
                "createdAt": "2018-05-07T13:30:34.066Z",
                "updatedAt": "2018-05-07T13:37:01.760Z",
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
                "title": "Grilled Steak & Vegetables with Cilantro-Jalapeño Dressing",
                "photo": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Asset",
                        "id": "3TJp6aDAcMw6yMiE82Oy0K"
                    }
                },
                "calories": 345,
                "description": "Warmer weather means the ushering in of grill season and this recipe completely celebrates the grill (or grill pan)! Squash and green beans are nicely charred then take a bath in a zesty cilantro-jalapeño dressing. After the steaks are perfectly seared, the same dressing does double duty as a tasty finishing sauce. A fresh radish salad tops it all off for crunch and a burst of color. Cook, relax, and enjoy!",
                "chef": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Entry",
                        "id": "1Z8SwWMmS8E84Iogk4E6ik"
                    }
                }
            }
        },
        {
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
                "title": "Crispy Chicken and Rice with Peas & Arugula Salad",
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
                ]
            }
        }
    ])),
}));

describe('RecipeList Component', () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <RecipeList />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it('should render recipes correctly', async () => {
        await waitFor(() => {
            const recipeElements = screen.getAllByRole('link', { name: /./i });
            expect(recipeElements).toHaveLength(4);
        });
    });


    it('should render recipe cards with correct titles', async () => {
        await waitFor(() => {
            const titleElements = screen.getAllByRole('heading', { level: 2 });
            const recipeTitles = [
                'White Cheddar Grilled Cheese with Cherry Preserves & Basil',
                'Tofu Saag Paneer with Buttery Toasted Pita',
                'Grilled Steak & Vegetables with Cilantro-Jalapeño Dressing',
                'Crispy Chicken and Rice with Peas & Arugula Salad',
            ];

            titleElements.forEach((element, index) => {
                expect(element.textContent).toContain(recipeTitles[index]);
            });
        });
    });
});
