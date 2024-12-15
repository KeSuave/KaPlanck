# [1.7.0](https://github.com/KeSuave/KaPlanck/compare/v1.6.0...v1.7.0) (2024-12-15)


### Bug Fixes

* bodies are now able to sleep (removed circular angle and pos updating) ([b5db27d](https://github.com/KeSuave/KaPlanck/commit/b5db27dfc35e61d5db364be3d2ecb2ca1f8898bd))


### Features

* inspect drawing for fixtures ([cf28b9a](https://github.com/KeSuave/KaPlanck/commit/cf28b9a59096ad23f96cb940f54837c82573476a))

# [1.6.0](https://github.com/KeSuave/KaPlanck/compare/v1.5.0...v1.6.0) (2024-12-14)


### Bug Fixes

* kpPos use kpMoveBy to match pos comp ([fe17f10](https://github.com/KeSuave/KaPlanck/commit/fe17f10808a6d725d8228ee467e60642a5875ce8))


### Features

* an extended vec2 of Planck to match KAPLAY's ([2e7073d](https://github.com/KeSuave/KaPlanck/commit/2e7073d1f79adbf63db0dfeb7f956e34b341d4ee))
* exposes utilities to find world and game obj with world component ([db496f8](https://github.com/KeSuave/KaPlanck/commit/db496f837b30da644fdec94af1a1d42dcbd02919))

# [1.5.0](https://github.com/KeSuave/KaPlanck/compare/v1.4.0...v1.5.0) (2024-12-09)


### Features

* added joints ([cb35089](https://github.com/KeSuave/KaPlanck/commit/cb350899479dd59ad64e40e7bb123320b676b047))
* added onRemoveBody, onRemoveFixture, onRemoveJoint ([e7b1ab0](https://github.com/KeSuave/KaPlanck/commit/e7b1ab087af3e56cedc028365173c7dc08b7b974))

# [1.4.0](https://github.com/KeSuave/KaPlanck/compare/v1.3.2...v1.4.0) (2024-12-08)


### Bug Fixes

* body component and fixture components no longer return null body or fixture ([ca2d538](https://github.com/KeSuave/KaPlanck/commit/ca2d53895717aa18af21b803fe43ef5df1a68f8b))


### Features

* addToDestroyList on both world and body components ([1c14389](https://github.com/KeSuave/KaPlanck/commit/1c14389528c6c66a203e743c8ac896c13ffa001c))
* world functions from planck to component ([aee309e](https://github.com/KeSuave/KaPlanck/commit/aee309ebf0144ac2ac5a74ac683da87d5d22a274))

## [1.3.2](https://github.com/KeSuave/KaPlanck/compare/v1.3.1...v1.3.2) (2024-12-05)


### Bug Fixes

* kaplay typo ([6041771](https://github.com/KeSuave/KaPlanck/commit/604177139fbcdce6881938856c36735ee07b02ea))

## [1.3.1](https://github.com/KeSuave/KaPlanck/compare/v1.3.0...v1.3.1) (2024-12-05)


### Bug Fixes

* docs and types ([a7f63b0](https://github.com/KeSuave/KaPlanck/commit/a7f63b0c0126a9e1dc082b879b7846732042f740))

# [1.3.0](https://github.com/KeSuave/KaPlanck/compare/v1.2.0...v1.3.0) (2024-12-04)


### Bug Fixes

* circle drawn position ([bb4ef9b](https://github.com/KeSuave/KaPlanck/commit/bb4ef9bbb25d06aa1163335c506c9a14604e3384))
* expose Fixtures and Shapes component types ([8a7e2cf](https://github.com/KeSuave/KaPlanck/commit/8a7e2cf607b0608eaf2f78ee98cea37b4a166c9b))
* missing kpPos no args overload ([ae719ee](https://github.com/KeSuave/KaPlanck/commit/ae719ee122ee8b3ff2eab990d8533a379a6d8c31))


### Features

* added fixture functions ([b24bc13](https://github.com/KeSuave/KaPlanck/commit/b24bc13cedcbf9b17ad3938e06636bf8665325a5))

# [1.2.0](https://github.com/KeSuave/KaPlanck/compare/v1.1.0...v1.2.0) (2024-11-26)


### Features

* added all Body functions to component ([d08c347](https://github.com/KeSuave/KaPlanck/commit/d08c347e54fd31e847a9008b23fb45f2b6c43b20))
* added collisionIgnore to Fixture ([734acc6](https://github.com/KeSuave/KaPlanck/commit/734acc6f34635befcca60244a234abd86f08f25a))
* added kpBodyComp functions to match area comp ([9c218e2](https://github.com/KeSuave/KaPlanck/commit/9c218e2812c04f33c20ad3ef01b40da4b5cd9ed0))
* BoxShape match a rect with width and height instead of halfWidth and halfHeight ([71f21a6](https://github.com/KeSuave/KaPlanck/commit/71f21a694732c8f73297ec207d877a65c9914245))

# [1.1.0](https://github.com/KeSuave/KaPlanck/compare/v1.0.0...v1.1.0) (2024-11-21)


### Features

* docs ([9336fe0](https://github.com/KeSuave/KaPlanck/commit/9336fe0812f140a4d7646e3291d2bae0e2f59477))
* fixture events ([1f38211](https://github.com/KeSuave/KaPlanck/commit/1f382114d746494957914d83c59ed8ce0b27b9ee))
* fixtures and shapes components ([ddaa957](https://github.com/KeSuave/KaPlanck/commit/ddaa957a92610835649665664f9de65613de337c))
* global collision events ([728100e](https://github.com/KeSuave/KaPlanck/commit/728100e63502c478abe3508e04a82428179e9ca1))
* world collision events ([0b1f1a7](https://github.com/KeSuave/KaPlanck/commit/0b1f1a733dfae33fb86f267804b08664a70fb182))

# 1.0.0 (2024-11-19)


### Features

* initial version ([690e6e8](https://github.com/KeSuave/KaPlanck/commit/690e6e8b11e926a057d871fc2ecf0f637d5011a5))
